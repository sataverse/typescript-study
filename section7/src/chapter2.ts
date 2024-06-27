// map

const arr = [1, 2, 3];

function map<T, U>(arr: T[], callback: (item: T) => U){
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

map([1, 2, 3], (it) => it * 2);


// forEach

const arr2 = [1, 2, 4];

function foreach<T>(arr: T[], callback: (item: T) => void) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

foreach(arr2, it => console.log(it.toFixed()));