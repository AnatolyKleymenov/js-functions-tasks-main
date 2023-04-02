const run = (text) => {
    // BEGIN
    takeLast = (str, num) => {
      if(str.length === 0 || num > str.length)
      {
        return null;
      }
      else {
        return str.slice(-num).split('').reverse().join('');
      }
    } 
    // END
  
    return takeLast(text, 4);
  };
  
export default run;