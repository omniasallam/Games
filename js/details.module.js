import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        document.getElementById('btnClose').addEventListener('click', ()=>{
            document.getElementById('details').classList.add('d-none');
            document.getElementById('game').classList.remove('d-none');
        })


        this.loading= document.querySelector('.loading')
        this.getDetails(id)
       
    }

  async  getDetails(id){
    this.loading.classList.remove('d-none');

    const options= {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
             // Accept: "application/json",
       // "Content-Type": "application/json",
    },
};
         let res= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
         let dataDetails= await res.json();
         console.log(dataDetails);
        this.loading.classList.add('d-none');
         this.ui= new Ui();
         this.ui.displayDetails(dataDetails)
        
        
    }
}