// A Sorted Array(Ascending order) is given  we have to return a sorted squared array(new array)

//there will be negative numbers in array given


// Approach 1
// let array = [-4,-3,1,5,9]
// function sortedSquaredArray(arr){
//  return arr.map((num)=>num**2)
// }

// let arr1 = sortedSquaredArray(array)
// let sortedarr = arr1.sort((a,b)=>a-b)
// console.log(sortedarr)

//Time complexity :O(nlogn)
//space complexity :O(n)

//-----------------------------------------------------------------------------------------------


// Approach 2
//Make use of the fact that the given array is Sorted

//let array = [-4,-3,1,5,9]

// function sortedSquaredArray(array){
//    let newArray = new Array(array.length).fill(0);
//    let pointerLeft = 0;
//    let pointerRight = array.length - 1;
//    for(let i= array.length-1;i>=0;i--){
//     const leftSquared = Math.pow(array[pointerLeft],2);
//     const rightSquared = Math.pow(array[pointerRight],2);
//     if(leftSquared>rightSquared){
//         newArray[i]=leftSquared;
//         pointerLeft++;
//     } else{
//         newArray[i]=rightSquared;
//         pointerRight--;
//     }
//    }
//    return newArray;
// }

// console.log(sortedSquaredArray(array))


// time complexity :O(n)
// space complexity :O(n)