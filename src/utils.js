const compose = (...fns) => data => fns.reduceRight((total, fn) => fn(total), data);
const identity = val => val;
const uniq = arr => [...new Set(arr)];
const onlyAlpha = val => val.replace(/\W/g, ' ');
const noSpaces = val => val.replace(/\s+/g, ' ');
const lower = val => val.toLowerCase();
const trim = val => val.trim();
const words = val => val.split(/\s|,+/);
const tokenize = val => compose(words, lower, noSpaces, onlyAlpha, trim, String)(val);
const sum = (arr, fn = identity) => arr.reduce((total, val) => total + fn(val), 0);
const ln = n => Math.log(n);
const exp = n => Math.E ** n;
const max = arr => Math.max(...arr);
const indexMax = arr => arr.findIndex(max);
const intersect = (arr, obj) =>
  arr.find(el => Object.values(el).some(val => Object.values(obj).includes(val)));
export { uniq, words, tokenize, sum, ln, exp, max, indexMax, intersect };
