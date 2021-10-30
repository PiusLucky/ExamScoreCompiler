calculateExamPositions = (arr) => {
    const newArr = [...arr]; // Making a copy of the input array!
    newArr.sort().reverse();
    const result = [];
    for (let i = 0; i < newArr.length; i++) {
        const newScores = {
            score: newArr[i],
            position: i + 1,
        };
        result.push(newScores);
    }
    return result;
};

const input = [
    691,
    672,
    727,
    753,
    684,
    332,
    666,
    673,
    646,
    762,
    677,
    675,
    777,
    729,
];

console.log(calculateExamPositions(input));
// Output :::
// [
//   { score: 777, position: 1 },
//   { score: 762, position: 2 },
//   { score: 753, position: 3 },
//   { score: 729, position: 4 },
//   { score: 727, position: 5 },
//   { score: 691, position: 6 },
//   { score: 684, position: 7 },
//   { score: 677, position: 8 },
//   { score: 675, position: 9 },
//   { score: 673, position: 10 },
//   { score: 672, position: 11 },
//   { score: 666, position: 12 },
//   { score: 646, position: 13 },
//   { score: 332, position: 14 }
// ]
// [Finished in 0.5s]
