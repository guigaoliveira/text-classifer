import { ln, tokenize, uniq } from './utils';
import { allDocs, allTypes } from './add';

const priori = [];
const condProb = [];
const occurrences = (arr, search) => arr.filter(val => val === search).length;
const unionByType = (docs, types, type) => [...docs.filter((v, index) => types[index] === type)];
const train = () => {
  const uniqTypes = uniq(allTypes);
  const vocabulary = uniq(tokenize(allDocs));
  uniqTypes.forEach((type) => {
    const [concatTextsDocs] = unionByType(allDocs, allTypes, type);
    const wordsByType = tokenize(concatTextsDocs);
    vocabulary.forEach(word =>
      condProb.push({
        value: ln((occurrences(wordsByType, word) + 1) / (wordsByType.length + vocabulary.length)),
        word,
        type,
      }),
    );
    priori.push(ln(occurrences(allTypes, type) / allDocs.length));
  });
};
export { condProb, priori, train };
