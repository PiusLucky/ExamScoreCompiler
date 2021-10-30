calculateExamPositions = (arr) => {
  const newArr = [...arr]
  newArr.sort().reverse()
  const obj = []
  for(let i = 0; i<newArr.length; i++){
   const newScores = { 
    score: newArr[i], 
    position: i + 1
    }
   obj.push(newScores)
 

}

  return obj
  
}

const input = [691,  672, 727,  753,  684, 332, 666,  673,  646,  762, 677, 675,  777, 729]

console.log(calculateExamPositions(input))
