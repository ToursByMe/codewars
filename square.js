//(17-11-2019)
var isSquare = function(n){
//loop for to pick up data into the index
for (let i = 0; i < n/2+2 ; ++i)
//operation to check if is square
{
  if(i * i == n)
  //if it is equal to n (number typed)
  {
  return true;
  };
};
 return false;
};

//(1/03/2020)

const isSquare = (n) => Math.squrt(n) % === 0 ? true : false;

