/* 
  A  boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different. 
  So create a function that returns the total number of boomerangs in an array.
*/

// My idea is to iterate the list and generate sub-arrays with length 3. O(n)
function counter(list) {
  let boomerangs = 0;

  for (let i = 0; i < list.length - 1; i++) {
    const boomerang = list.slice(i, i + 3);
    if (boomerang[0] === boomerang[2] && boomerang[0] !== boomerang[1]) {
      boomerangs++;
    }
  }
  console.log(boomerangs);
  return boomerangs;
}

counter([9, 5, 9, 5, 1, 1, 1]); // 2
counter([5, 6, 6, 7, 6, 3, 9]); // 1
counter([4, 4, 4, 9, 9, 9, 9]); // 0
counter([3, 5, 3, 5, 3]); // 3
counter([3, 5, 3]); // 1
counter([0, 0, 0]); // 0
counter([0, 0]); // 0
counter([0]); // 0
counter([]); // 0
