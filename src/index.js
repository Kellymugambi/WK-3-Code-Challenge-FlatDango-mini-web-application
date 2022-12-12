document.addEventListener("DOMContentLoaded", ()=>{
    getfilmls()
    //getfilml1()
})




function getfilmls (){
    fetch("http://localhost:3000/films/") 
    .then(response => response.json())
    .then(data => data.map((film) =>{
        const li = document.createElement("li");
        li.textContent = film.title
        document.querySelector("#films").append(li)

    }))
    
 }
    
    let runtime = document.querySelector("#runtime");
    let showtime = document.querySelector("#showtime");
    let avtickets = document.querySelector("t#ickets");

// const getfilml1 =()=> {
//     fetch("http://localhost:3000/films/1") 
//     .then(response => response.json())
//      .then((film1) => {
//         const div2= document.querySelector("#content")
//         const image = document.querySelector("#img")
//         image.setAttribute(src,film1.poster)
//         //div2.appendChild(image)
        

//     })
//  }
