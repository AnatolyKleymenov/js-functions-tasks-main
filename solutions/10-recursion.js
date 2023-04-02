const sequenceSum = (begin, end) => {
    // BEGIN
  if (begin > end)
    return NaN;
  else if (begin === end)
    return begin;
  else
    return begin + sequenceSum(++begin, end);
    // END
  };
  
export default sequenceSum;
  