/*

Ackermann function
The Ackermann function is a classic example of a recursive function, notable especially because it is not a primitive recursive function. 
It grows very quickly in value, as does the size of its call tree.

The Ackermann function is usually defined as follows:

           n+1                 if m=0
A(m,n)=    A(m−1,1)            if m>0 and n=0
           A(m−1,A(m,n−1))     if m>0 and n>0
        

Its arguments are never negative and it always terminates.

Write a function which returns the value of  A(m,n) . Arbitrary precision is preferred (since the function grows so quickly), but not required.

*/

function ack(m, n) {
      let result = 0;
      if(m === 0){
            result = n + 1;
      } else{
            if(m > 0 && n === 0){
                  result = ack(m-1,1);
            } else if(m > 0 && n > 0){
                  result = ack(m - 1, ack(m, n - 1));
            }
      }

      return result;
}
