/* 
  The length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
    Example
      [1, [2, 3]]: 2 elements, number 1 and array [2, 3]
  Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
*/

/* 
  My idea is to iterate the elements of the array and separate them in two cases:
  function getLengthRecursive(array):
    Iterate elements:
    1) If element is an array => counter += getLengthRecursive(element) // Recursive call
    2) If element is not an array => counter++
*/

function getLengthRecursive(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      count += getLengthRecursive(array[i]);
    } else {
      count++;
    }
  }
  return count;
}

function getLength(array) {
  const count = getLengthRecursive(array);

  console.log(count);
  return count;
}

getLength([1, [2, 3]]); // ➞ 3
getLength([1, [2, [3, 4]]]); // ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]); // ➞ 6
getLength([1, [2], 1, [2], 1]); // ➞ 5
getLength([1, 2]); // ➞ 2
getLength([]); // ➞ 0
