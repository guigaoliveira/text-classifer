import { intersect, indexMax, max, exp, sum, tokenize, uniq } from './utils';
import { allDocs, allTypes } from './add';
import { condProb, priori } from './train';

const classify = (doc) => {
  const uniqTypes = uniq(allTypes);
  const vocabulary = uniq(tokenize(allDocs));
  const wordsDoc = tokenize(doc).filter(word => vocabulary.includes(word));
  const sumCondProb = type => sum(wordsDoc, word => intersect(condProb, { word, type }).value);
  const scores = uniqTypes.map((type, index) => exp(priori[index] + sumCondProb(type)));
  return {
    type: uniqTypes[indexMax(scores)],
    score: max(scores),
  };
};
export default classify;
