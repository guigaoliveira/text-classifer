import TC from '.';

TC.add('teste testando isso aqui', 'port');
TC.add('speak', 'en');
TC.train();
console.log(TC.classify('teste'));
