// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let sum = 0;
// let positiveNum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         sum += i;
//         positiveNum++;
//     }
// }
// console.log(sum);
// console.log(positiveNum); ---- #1

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let minElement = 0;
// let indexOfElement = '';
// for (let i = 0; i < arr.length; i++){
//     minElement = Math.min.apply(null, arr);
//     if (arr[i] === minElement){
//         indexOfElement = i;
//     }
// }
// console.log(minElement);
// console.log(indexOfElement); ---- #2

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let minElement = 0;
// let indexOfElement = '';
// for (let i = 0; i < arr.length; i++){
//     minElement = Math.max.apply(null, arr);
//     if (arr[i] === minElement){
//         indexOfElement = i;
//     }
// }
// console.log(minElement);
// console.log(indexOfElement); ---- #3

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let negativeNum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0){
//         negativeNum++
//     }
// }
// console.log(negativeNum); ---- #4

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//  let evenPositiveNum = 0;
//  for (let i = 0; i < arr.length; i++){
//      if (arr[i] > 0 && arr[i] % 2 !== 0){
//          evenPositiveNum++;
//      }
// }
//  console.log(evenPositiveNum); ---- #5

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let evenPositiveNum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0 && arr[i] % 2 === 0){
//         evenPositiveNum++;
//     }
// }
// console.log(evenPositiveNum); ---- #6
//
// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let even = '';
// let evenPositiveSum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0 && arr[i] % 2 === 0){
//         even += arr[i] + '\n';
//         evenPositiveSum += arr[i];
//     }
// }
// console.log(even);
// console.log(evenPositiveSum); ---- #7

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let uneven = '';
// let unevenPositiveSum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0 && arr[i] % 2 !== 0){
//         uneven += arr[i] + '\n';
//         unevenPositiveSum += arr[i];
//     }
// }
// console.log(uneven);
// console.log(unevenPositiveSum); ---- #8

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let positive = '';
// let positiveMulti= 1;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         positive += arr[i] + '\n';
//         positiveMulti *= arr[i];
//     }
// }
// console.log(positive);
// console.log(positiveMulti); ---- #9

// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let maxElement = 0;
// for (let i = 0; i < arr.length; i++){
//      maxElement = Math.max.apply(null, arr);
//      if (arr[i] !== maxElement){
//          arr[i] = 0;
//      }
//  }
// console.log(arr); ---- #10
