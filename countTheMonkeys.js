// 9/12/2019
function monkeyCount(n) {
let monky = [];
 for( let i = 1; i <= n; ++i){
  monky.push(i);
  }
return monky;
};

monkeyCount(10);

// 15/02/2020
const monkeyCount = (n) => [...Array(n)].map(_ => n++);
monkeyCount(15);

