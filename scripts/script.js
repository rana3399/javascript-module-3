//  episodes = async function (){
//  let episodesURL = "https://rickandmortyapi.com/api/episode"
 
//  let resposne = await fetch(episodesURL);
//  let {results} = await resposne.json();
//  console.log(results)
//    // return results;
//    results.forEach(({name, air_date, episode}) =>{
//        console.log(
//            `The name is ${name}`,
//            `The air date is ${air_date}`,
//            `and the episode code is: ${episode}`
//         )
//    })
// }

// episodes();

// ----------------------
charecter = async function (){
    const charecterURL = "https://rickandmortyapi.com/api/character";
    
    let resposne = await fetch(charecterURL);
     let {results} = await resposne.json();
    //  results.map((results)=>{
    //     console.log(results.episode)
    //  })
    
    // return results;
    //    results.forEach(({name, status, species, gender}) =>{
    //     let rootEl = document.getElementById('root');
    //     let div = document.createElement('div');
    //     //let imgEl = document.createElement('img');
        
    //     imgEl.src = `${image}`;
    //     div.appendChild(imgEl)
    //     rootEl.appendChild(div);
    //       console.log(
    //           `The name is ${name}`,
    //           `The status of the Charecter is :  ${status}`,
    //           `and the species is: ${species}`,
    //           `Gender is: ${gender}`
    //        )
    //   })
      return results;
   }

  
   

// ---------------

let rootEl = document.getElementById('root');

let creatHeader = function(){
let headContainer = document.createElement('div');
    headContainer.classList.add('headContainerClass');

let header = document.createElement('div');
    header.classList.add('head');
let hTag = document.createElement('h1')
    hTag.innerHTML = 'Rick and Morty';

    header.appendChild(hTag);
    headContainer.appendChild(header);
    rootEl.appendChild(headContainer);
    
}

 creatHeader()

let sideBarContainer = async function(){

    let results = await charecter();
  
    //console.log(results);
    sideBarEl = document.createElement('div');
     sideBarEl.classList.add('sideBar-container');

    sideBarNavLinks = document.createElement('div');
    sideBarNavLinks.classList.add('side-Bar');

    sideBarEl.appendChild(sideBarNavLinks)
    rootEl.appendChild(sideBarEl);

    let ul = document.createElement("ul");
    results.map((result,index)=>{
        // console.log(results.episode)
        let li =document.createElement("li")
        let links = document.createElement("a");

        //links.setAttribute('title', 'Google');
        //links.setAttribute('href', 'http://google.com');
        //links.title= `Episode ${index+1}`;
        //links.href = result.episode;
        links.text  = `Episode ${index+1}` 
        links.href  = result.episode[index]
        links.target = "_blank";

         
        li.appendChild(links);
        ul.appendChild(li);
        sideBarNavLinks.appendChild(ul);

     })


}

sideBarContainer()