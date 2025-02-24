// Promise(): it will always takes a function 

// Note: always put new to promise constructor otherwise it will through an error.

// Syntax: 
// const res = new Promise((parameters)=>{
// })
// res.then((parameters)=>{
// })
// res.catch((parameters)=>{
// })

const req = new Promise((res, rej)=>{
    if (true) {
        return res()
    }
    else{
        return rej()
    }
}).then(()=>{
        console.log("Success!");
    }).catch(()=>{
        console.log("Failed!");
    })


// User will ask for a number between 0 and 9 and if the number is less than 5 resolve else reject.

const ans = new Promise((res, rej)=>{
    let num = Math.floor(Math.random())
    if (num < 5) {
        return res("Resolved")
    }
    else{
        return rej("Rejected")
    }
}
)

ans.then((Data)=>{
    console.log("Success: ", Data);
})
ans.catch((error)=>{
    console.log("Failed: ", error);
})


