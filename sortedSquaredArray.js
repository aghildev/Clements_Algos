// There can be both positive and negative values as an input array

// Approach 1 (brute force)
let array = [-4,-2,3,6,8]
function sortedSquaredArray(arr) {
    const squaredArray = arr.map((num)=>{
        return num**2
    })

    squaredArray.sort((a,b)=>a-b)
    return squaredArray
}

console.log(sortedSquaredArray(array))

// TimeComplexity :O(logn)
// spaceComplexity :O(n)

// Approach 2
// let array = [-4,-2,3,6,8]
function sortedSquaredArray(arr){
    let newArr = new Array(arr.length).fill(0);
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    for(let i = arr.length-1;i>=0;i--){
        let leftSquaredNum = arr[leftPointer]**2;
        let rightSquaredNum = arr[rightPointer]**2;
        if(leftSquaredNum > rightSquaredNum){
            newArr[i] = leftSquaredNum;
            leftPointer++
        } else{
            newArr[i]=rightSquaredNum;
            rightPointer--;
        }
    }

    return newArr;
}

console.log(sortedSquaredArray(array))


// TimeComplexity :O(n)
// spaceComplexity :O(n)