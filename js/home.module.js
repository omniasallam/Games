import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home{

    constructor(){
       document.querySelectorAll('.nav-link').forEach((link)=>
    {
        link.addEventListener('click', ()=>{
           // console.log("Hellllllo");
           document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add("active");
       // const category= link.getAttribute('data-category');
       const category= link.dataset.category
       this.getGames(category)
        })
    })

this.loading= document.querySelector('.loading')
this.game=document.getElementById('game')

    this.ui= new Ui();
    this.getGames("MMORPG")
    }
    
   

    async getGames(cat){
        this.loading.classList.remove('d-none')
        const options= {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                 // Accept: "application/json",
           // "Content-Type": "application/json",
        },
    };
        const api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat} `, options)
        const response = await api.json();
       
         // console.log(response);
        let part= response.slice(0,20)
        this.loading.classList.add('d-none')
       
        // console.log(part);
        this.ui.displayDataGames(part);

        document.querySelectorAll('.card').forEach((card)=>{
           card.addEventListener('click', ()=>{
            //console.log("Helllllllo");
            document.getElementById('details').classList.remove('d-none');
            this.game.classList.add('d-none');

            this.details = new Details(card.dataset.id)
            
           
            
           })
            
        })
      
       
        
    }
    
 }