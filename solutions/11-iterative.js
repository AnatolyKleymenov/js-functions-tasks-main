import sequenceSum from "./10-recursion";

const smallestDivisor = (num) => {
    // BEGIN
  const iterative = (obj) => {
    if(obj > num / 2)
      return num;
    
    if(num % obj === 0)
      return obj;
      
    return iterative(++obj);
  }
  return iterative(2);
    // END
  };
  
export default smallestDivisor;
  