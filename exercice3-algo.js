function findOdd(array) {
  const dict = {}

  array.forEach((number) => {
    dict[number] ? dict[number]++ : dict[number] = 1
  })

  for (let number in dict){
    if(dict[number] % 2 !== 0){
      return Number(number)
    }
  }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));

/**
[1,1,2] - 2
[0,1,0,1,0] - 0
[1,2,2,3,3,3,4,3,3,3,2,2,1] - 4
[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] - 5
*/