document.addEventListener("DOMContentLoaded", ()=>{
    //invoke the twoo get request and render the response to DOM
    getfilmls()
    getfilml1()
    
})



//make GET request for films data
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
// make GET request to get film/1 data for display.
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

//tickets available        
        function availableTickets(){
            let capacity =film1.capacity 
             let tSold = film1.tickets_sold
             if (capacity > tSold)       
             return capacity -tSold
           
                }
        avtickets = availableTickets()
        document.querySelector(".tick").append(avtickets) 
    })

 }
 
let capacity =film1.capacity 
let tSold = film1.tickets_sold
const btn = document.querySelector("#btn")
        btn.addEventListener("click", ()=>{ 
        btn.innerHTML;
        if (capacity>tSold)
        return avtickets -= 1
        else if (capacity<=tSold)
        return("There are 0 tickets available")
    
    document.querySelector("#pbtn").appendChild(btn)
})