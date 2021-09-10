const result = document.querySelector("#result")
const searchBar = document.querySelector("#search")
const listItem = []

getData()
searchBar.addEventListener('input', e =>filterOut(e.target.value))

async function getData(){
    const res = await fetch("https://randomuser.me/api?results=50")
    const data = await res.json()
    result.innerHTML = ""
    data.results.forEach(user=>{
        const li = document.createElement("li")
        listItem.push(li)
        li.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p></div>`
        result.appendChild(li)
    })  
}
function filterOut(input){
    listItem.forEach(user=>{
        if(user.innerText.toLowerCase().includes(input.toLowerCase())){
            user.classList.remove("hide")
        }
        else{
            user.classList.add("hide")
        }
    })
}