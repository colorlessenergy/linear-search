# linear-search

Linear search is an algorithm that looks through your data structure such as an array
until it finds the value you are looking for.

For Example lets say you have an array:
var arr = [0, 10, 3, 5].
Now lets say we want to get the value of 3.
well if we do a Linear search we will go through every single number in the array
until we find the the number 3.

now we can get the index.

we can use a for loop for this.

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    return i
    or
    return arr.indexOf(arr[i])
  }
}

this will return the index of the number we are looking for
