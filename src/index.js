document.addEventListener("DOMContentLoaded", ()=>{
    //invoke the two get request and render the response to DOM
    getfilmls()
    getfilml1()
    
})

//make GET request for films data.
//map through the data and render (film.title of each film) to the DOM, on the left side of the page
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
    
// make GET request to get film/1 data and display it in the DOM.
// display film/1 : poster, title, runtime, showtime and available tickets.
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
        
    
//tickets available = (film1.capacity - film.tickets_sold)       
const availableTickets = ()=>{
            let capacity =film1.capacity 
             let tSold = film1.tickets_sold
             if (capacity > tSold)       
             return capacity -tSold
           
                }
        avtickets = availableTickets()
        document.querySelector(".tick").append(avtickets) 

       //Add button to return (available tickets -1) 0nclick. 
      const button =  document.querySelector("#btn")
      button.addEventListener("click", (e)=>{
        capacity = parseInt(film1.capacity)
        tSold = parseInt(film1.tickets_sold)
        avtickets = parseInt(document.querySelector("#tickets").innerHTML)
        if (tSold===capacity){
            button.innerHTML = "SOLD OUT"
        }else{
            button.innerHTML = ((capacity-tSold)-1)
        }
        

        
     

    })
  
        
    })  
    
 }


   
