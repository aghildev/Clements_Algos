//Validate Subsequence

// Two Arrays  are give we have to check weather the second array is the valid subsequence of the first one

// eg:[5,1,22,25,6,-1,8,10,11,7] and [1,6,-1,10]---->true


// let array = [5,1,22,25,6,-1,8,10,11,7]
// let sequence = [1,6,-1,10]


// function isValidSubsequence(array,sequence) {
//      let arrIdx = 0;
//      let seqIdx = 0;
//      while(arrIdx < array.length && seqIdx < sequence.length) {
//         if(array[arrIdx] === sequence[seqIdx]){
//             seqIdx++
//         }
//         arrIdx++
//      }

//      return seqIdx === sequence.length
// }

// console.log(isValidSubsequence(array, sequence))

// Time_complexity :O(n)
// Space_complexity :O(1)