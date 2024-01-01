let arr = [4,2,6,3,8,6,9]

function maxValue(arr){
    let maxe = arr[0];
    for(let i=0;i<arr.length;i++){
        // if(arr[i]>maxe){
        //     maxe = arr[i];
        // }
        maxe = Math.max(maxe,arr[i])
    }
    return maxe;
}

console.log(maxValue(arr));


let ans = arr.reduce((acc,curr) => {
    acc = Math.max(acc,curr)
    return acc;
},0)

console.log(ans)

let res = arr.reduce((acc,curr) => (acc = acc + curr),0)
console.log(res)