export const convertDigitToStar = (digit) => {
  switch (digit) {
    case 5:
      return  '* * * * *'
    case 4:
      return '* * * *'
    case 3:
      return '* * *'
    case 2:
      return '* *'
    case 1:
      return '*'
    default:
      break;
  }
}

