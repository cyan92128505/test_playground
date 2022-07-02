function MagicNumbers(rangeNumber) {
  let arrOfString = [];
  for (let i = 1; i <= rangeNumber; i++) {
    if ((i % 7 === 0 || i % 3 === 0) && i % 21 !== 0) {
      arrOfString.push(i);
    }
  }
  return arrOfString;
}

export default MagicNumbers;
