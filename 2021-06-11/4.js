/* 4. Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии: */

function sunCount(arr, currentSum = 0, i = 0) {
  if (arr.length !== i) {
      let nextSum = currentSum + arr[i];
      return sunCount(arr, nextSum, ++i);
  } else return currentSum;
}

const sum = (...arr) => sunCount(arr);

console.log(sum(1, 2, 3, 4, 5)); // 15