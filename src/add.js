const allDocs = [];
const allTypes = [];
const add = (doc, type) => {
  allDocs.push(doc);
  allTypes.push(type);
};
export { add, allDocs, allTypes };
