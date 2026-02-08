function sumFor(list: number[]) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4, 5])); // sum = 15

function sumWhile(list: number[]) {
  let sum = 0;
  const i = 0;
  while (i < list.length) {
    sum += list[i];
  }
  return sum;
}

console.log(sumWhile([1, 2, 3, 4, 5])); // 15

function sumRecursion(list: number[]): number {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}

console.log(sumRecursion([1, 2, 3, 4, 5])); // 15

function sumTheFunctionalWay(list: number[]) {
  return list.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumTheFunctionalWay([1, 2, 3, 4, 5]));
