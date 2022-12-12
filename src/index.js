document.addEventListener("DOMContentLoaded", ()=>{
    getfilmls()
    getfilml1()
})




function getfilmls (){
    fetch("http://localhost:3000/films/") 
    .then(response => response.json())
    .then(data => data.map((film) =>{
        const p = document.createElement("p")
        p.className = "list"
        p.textContent = film.title
        document.querySelector("#films").append(p)

    }))
    
 }

    
    let runtime = document.querySelector("#runtime");
    let showtime = document.querySelector("#showtime");
    let avtickets = document.querySelector("#tickets");

const getfilml1 =()=> {
    fetch("http://localhost:3000/films/1") 
    .then(response => response.json())
     .then((film1) => {
        const image = document.querySelector("#img")
        image.setAttribute("src", film1.poster)
        
        
        const h3 = document.querySelector("#h3")
        const title =document.querySelector("#title")
        title.textContent=film1.title
        h3.appendChild(title)

        runtime =film1.runtime
        document.querySelector(".num").append(runtime,)

        showtime=film1.showtime
        document.querySelector(".show").append(showtime)
        
        // avtickets=(film1.capacity-film1.sold_tickets)
        // document.querySelector(".tick").append(avtickets)
        
    })
 }
