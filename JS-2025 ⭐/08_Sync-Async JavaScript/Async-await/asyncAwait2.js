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

// converting above code into async and await 

const fetchData = async ()=>{
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans = await raw.json();
    console.log(ans);
}

fetchData();