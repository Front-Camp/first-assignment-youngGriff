/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  /*  let index = arr.indexOf(Infinity);
    if (index > -1)
      arr.splice(index, 1);
    let indexNan = arr.indexOf(NaN);
     if (indexNan > -1)
      arr.splice(indexNan, 1);
    */
 let array= arr.filter(function (item, i, ar) {
    return isFinite(item);
  });

  return Math.max(...array);
};

export default max;
