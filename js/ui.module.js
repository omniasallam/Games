export class Ui{
    constructor(){}


    displayDataGames(data){
       
        let gamesBox=``;
        for(let i=0; i<data.length; i++){
            gamesBox+=` <div class="col">
         <div data-id="${data[i].id}"  class="card h-100 bg-transparent" role="button" ">
            <div  class="card-body">
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" />
               
               </figure>
   
               <figcaption>
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 small">${data[i].title}</h3>
                     <span class="badge btn  p-2">Free</span>
                  </div>
   
                  <p class="card-text small text-center opacity-50">
                     ${data[i].short_description.split(" ", 8)}
                  </p>
   
               </figcaption>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
   
               <span class="badge badge-color">${data[i].genre}</span>
               <span class="badge badge-color">${data[i].platform}</span>
   
            </footer>
         </div>
      </div>`;
      document.getElementById('gameData').innerHTML=gamesBox;

        }
    }


    displayDetails(data){
       const detailsBox =` <div class="col-md-4">
               <img src="${data.thumbnail}" alt="image details" class="w-100">
            </div>
            <div class="col-md-8">
              <h3> Title: ${data.title} </h3>
              <p>Category:  <span class="badge text-bg-info"> ${data.genre} </span> </p>
              <p>Platform:  <span class="badge text-bg-info">${data.platform}</span> </p>
              <p>Status:  <span class="badge text-bg-info">${data.status}</span> </p>
              <p class="small">${data.description}</p>
              <a class="btn btn-outline-secondary text-bg-primary" target="_blank" href="${data.game_url}" >Show game</a>
            </div>`
            document.getElementById('detailsContent').innerHTML= detailsBox;
    }
}