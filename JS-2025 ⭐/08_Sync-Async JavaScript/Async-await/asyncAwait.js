var fetching = async ()=>{
    await setTimeout(()=>{
        console.log("Data fetched");
    }, 3000)
}
console.log(fetching());

// if we are not using async and await then we will use the promises .then() for data

// Example: 
function fetchData(){
    fetch(`https://randomusr.me/api/`) // fetching url

    // getting raw data into a json file
    .then((raw)=>{
        return raw.json();
    })

    // converting data
    .then((data)=>{
        console.log(data);
    })
}
fetchData()
// these all steps we have to follow, if we are not using async and await
