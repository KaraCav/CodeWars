// CODEWARS MONTH 1 - MARCH 21- 31st 2018
// NUMBER 1: Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
function deleteNth(arr, n) {
  // ...
  var result = [];
  var itemCounts = {};
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var count = itemCounts[item] || 0;
    if (count < n) {
      result.push(item);
      itemCounts[item] = count + 1;
    }
  }
  return result;
}

// NUMBER 2: Return the inverse of an array ie. [1, -3, 0] —> [-1, 3, 0]
function invert(array) {
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      newArray.push(0);
    } else {
      newArray.push(array[i] * -1);
    }
  }
  return newArray;
}

// NUMBER 3: You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?
// EX. ARRAY:  var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Max’, lastName: 'U.', country: ‘U.S.’, continent: 'Americas', age: 32, language: 'Ruby' } ];
function greetDevelopers(list) {
  for (i = 0; i < list.length; i++) {
    var name = list[i].firstName;
    var lang = list[i].language;
    var greet =
      'Hi ' + name + ', what do you like the most about ' + lang + '?';
    console.log(greet);
    list[i].greeting = greet;
  }
  return list;
}
//OR can do:
function greetDevelopers(list) {
  return list.map(x =>
    Object.assign({}, x, {
      greeting: `Hi ${x.firstName}, what do you like the most about ${
        x.language
      }?`
    })
  );
}

//Number 4: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the SUM of all the multiples of 3 or 5 that are BELOW the number passed in.
function solution(number) {
  var myArr = [];
  var totalNum = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      myArr.push(i);
    }
  }
  for (var j = 0; j < myArr.length; j++) {
    totalNum = totalNum + myArr[j];
  }
  return totalNum;
}
//OR can do:
function solution(number) {
  var sum = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
// Number 5: Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. If the input array is empty or null, return an empty array- JavaScript will return: []; The passed array should NOT be changed.
function countPositivesSumNegatives(input) {
  if (input !== null && input.length > 0) {
    var countPos = 0;
    var negSum = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        countPos = countPos + 1;
      } else {
        negSum = negSum + input[i];
      }
    }
    var newArr = [];
    newArr.push(countPos);
    newArr.push(negSum);
    console.log(1);
    return newArr;
  } else {
    return [];
  }
}
// OR can do:
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce(
    (arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    },
    [0, 0]
  );
}
// Number 6: In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it. Code:  function withoutLast(arr) {
//   arr.pop();
//   return arr; }
function withoutLast(arr) {
  return arr.slice(0, -1);
}
// Number 7: Convert number to reversed array of digits. Given a random number, you have to return the digits of this number within an array in reverse order. Ex. 348597 => [7,9,5,8,4,3]
function digitize(num) {
  var reversedArray = num
    .toString()
    .split('')
    .reverse();
  for (var i = 0; i < reversedArray.length; i++) {
    reversedArray[i] = parseInt(reversedArray[i]);
  }
  return reversedArray;
}
// OR can do:
function digitize(n) {
  return String(n)
    .split('')
    .map(Number)
    .reverse();
}
