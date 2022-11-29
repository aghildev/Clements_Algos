// two number sum

// An Array of numbers are given,no numbers is repeated..find the pairs that sums up the target

// eg:[3,5,-4,8,11,1,-1,6]  target-10    Ans:[11,-1]

//Approach One :

// let arr = [3,5,-4,8,11,1,-1,6]
// let tar = 10
// function yields_target(arr,target){
//    for(let i = 0;i < arr.length;i++){
//     for(let j = i+1;j<arr.length;j++){
//         if(arr[i]+arr[j] === target){
//             return [arr[i],arr[j]]
//         }
//     }
//    }

//    return `not found`
// }

// console.log(yields_target(arr,tar))



// Time Complexity : o(n^2)
// space Complexity : o(1)



// -----------------------------------------------------------------------------------------------------------------


// Approach Two using hash table

// let arr = [3,5,-4,8,11,1,-1,6]
// let tar = 10

// function yields_target(arr,target){
//     let hashTable = {}

//     for(let num of arr){
//         let potentialMatch = target - num;
//         if( potentialMatch in hashTable){
//             return [potentialMatch,num]
//         }else{
//             hashTable[num]=true
//         }
//     }
//    return `not found`
// }


// console.log(yields_target(arr,tar))

// Time_complexity : o(n)
// space_complexity :o(n)

//************************************************************************************************************* */

// Approach 3 By Sorting And Two pointer

// let arr = [3,5,-4,8,11,1,-1,6]
// let tar = 10

// function yields_target(arr,target){
//     arr.sort((a,b)=>a-b)
//     let left = 0;
//     let right = arr.length -1;
//     while(left < right){
//         const currentSum = arr[left] + arr[right]
//         if(currentSum === target){
//             return [arr[left],arr[right]]
//         }else if(currentSum < target){
//             left++
//         }else if(currentSum > target){
//             right--
//         }
//     }
//     return `not found`
// }

// console.log(yields_target(arr,tar))


// Time_complexity : o(nlogn)
// space_complexity :o(1)