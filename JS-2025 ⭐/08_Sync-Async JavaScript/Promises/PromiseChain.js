// Write a promises for these tasks:

// Go to Home
// open the gate and lock it
// get ready your food and have it
// listen some music
// Its time to sleep

const ans = new Promise(function(res, rej){
    return res("Go to Home")
})

const ans2 = ans.then(function(data){
    console.log(data);
    return new Promise((res, rej)=>{
        return res("open the gate and lock it");
    })
})

const ans3 = ans2.then((data)=>{
    console.log(data);
    return new Promise((res, rej)=>{
        return res("get ready your food and have it")
    })
})

const ans4 = ans3.then((data)=>{
    console.log(data);
    return new Promise((res, rej)=>{
        return res("listen some music")
    })
})

const ans5 = ans4.then((data)=>{
    console.log(data);
    return new Promise((res, rej)=>{
        return res("Its time to sleep")
    })
})

ans5.then((data)=>{
    console.log(data);
})

ans.catch((error)=>{
    console.log(error);
})