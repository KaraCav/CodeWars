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
