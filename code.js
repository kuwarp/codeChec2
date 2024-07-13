// find second Largest::::::
function secondLargest(arr){
    let first=Math.max(arr[0],arr[1])
    let second=Math.min(arr[0],arr[1])

    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
second=first
first=arr[i]
        }
        else if(arr[i]>second && arr[i]!==first){
            second=arr[i]

        }
    }
    return second
}
console.log(secondLargest([13,5,17]));

// Largest::

function largestArray(arr){
    let first=arr[0]
    for(let i=0;i<arr.length;i++){
      if(arr[i]>first){
        first =arr[i]
      }
    }
    return first
}

console.log(largestArray([13,5,17]));


function flat(arr){
    let arrNew=[]
    arr.forEach(element => {
        if(Array.isArray(element)){
            arrNew=arrNew.concat(flat(element))
        }
        else{
            arrNew.push(element)
        }
    });

    return arrNew
}

console.log(flat([1,2,[3,[5,[7]]]]));

// Reverse an Array
function reverse(arr){
   let first=0
   let second=arr.length-1
   while(first<second){
    [arr[first],arr[second]]=[arr[second],arr[first]]
    first++
    second--
   }
   return arr
}
console.log(reverse([9,8,7,6,5,4]));

// reverse string

function revrseString(str){
    let newStr=''

    for(let char of str){
        newStr=char+newStr
    }

    return newStr


}


console.log(revrseString('ser'));


// palindrome
function palindrome(num){
    let orig=num;
    let rev=0;
    while(num>0){
        let dig=num%10
    rev=rev*10+dig
    num=Math.floor(num/10)
    }
    return orig==rev
}

console.log(palindrome(12121));

// string poalindrome


function palindromeStr(str){
    let left=0
    let right=str.length-1

    while(left<right){
        if(str[left]!==str[right]){
            return false
        }

        left++
        right--
    }

    return true
}

console.log(palindromeStr('asas'));

// find Unique

function findUnique(arr){
    let map= new Map()
    let newArr=[]

    for (const ele of arr) {
        if(map.has(ele)){
            map.set(ele,map.get(ele)+1)
        }
        else{
            map.set(ele,1)
        }

      
        
    }
    for(let [eles,count] of map.entries()){
        if(count==1){
            newArr.push(eles)
        }
    }
    return newArr
}

console.log(findUnique([2,4,2,1,4]));



// find Duplicate


function findDup(arr){
    let set =new Set()
    let arrNew=[]

    for(let ele of arr)
{
    if(set.has(ele) && !arrNew.includes(ele)){
        arrNew.push(ele)
    }
    else{
        set.add(ele)
    }
}

return arrNew
}

console.log(findDup([2,4,2,1,4]));


function sorting(left,right){
    let result=[]
    let leftIndex=0
    let rightIndex=0

    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }
        else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }
return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

}

function mergeSort(arr){
    if (arr.length <= 1) {
        return arr;
    }
    let n=Math.floor(arr.length/2)
    let first=arr.slice(0,n)
    let second=arr.slice(n)

    return sorting(mergeSort(first),(mergeSort(second)))
}
console.log(mergeSort([8,6,4,2]));



// using quickSort



function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let n=arr[arr.length-1]
    let left=[]
    let right=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<n){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }


    return [...quickSort(left),n,...quickSort(right)]
}

console.log(quickSort([8,6,4,2]));

// Searching:::::::

function searchingArr(arr,k){
   
    let first=0
    let second=arr.length-1

    while(first<=second){
let mid= Math.floor((first+second)/2)

        if(arr[mid]===k){
            return mid
        }
        else if(arr[mid]<k)
first=mid+1
        else{
            second=mid-1
        }
        }

        return 'not found'
}


console.log(searchingArr([2,4,3],6));


// using linear
function useLinear(num,target){
    if(num<=1){
        return num
    }

    for(let i=0;i<num.length;i++){
        if(num[i]===target){
            return i
        }
    }
    return 'not found'
}

console.log(searchingArr([2,4,3],2));


function rotateArray(arr,k){
   let n=arr.length+1
    k=k%n

    for(let i=0;i<k;i++){
        const temp=arr.pop()

        arr.unshift(temp)
    }
    return arr
}

console.log(rotateArray([2,4,3,8,6],3));
// Two Sum::::::

function twoSum(arr,target){
    let map=new Map()
    for(let i=0;i<arr.length;i++){
        let com=target-arr[i]
        if(map.has(com)){
            return [map.get(com),i]
        }
        map.set(arr[i],i)
    }

    return []
}



// shift zeros


function shiftZeros(arr){
   let index=arr.length-1
   for(let i=index;i>=0;i--){
if(arr[i]!==0){
    arr[index--]=arr[i]
   }}
   while(index>=0){
    arr[index--]=0
   }

   return arr
}


console.log(shiftZeros([3,0,4,0,5,0]));

