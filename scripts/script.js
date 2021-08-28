
// --------------------------------------------Episodes
  episodes = async function (){
    let episodesURL = "https://rickandmortyapi.com/api/episode"
 
 let resposne = await fetch(episodesURL);
 let {results} = await resposne.json();
 console.log(results)
   // return results;
   results.forEach(({name, air_date, episode}) =>{
       console.log(
           `The name is ${name}`,
           `The air date is ${air_date}`,
           `and the episode code is: ${episode}`
        )
   })

  }
  episodes()

  // ------------------------------------------------charecter



charecter = async function (){
    const charecterURL = "https://rickandmortyapi.com/api/character";
    
    let resposne = await fetch(charecterURL);
     let {results} = await resposne.json();
     results.map((results)=>{
        console.log(results.episode);
     })
     let rootEl = document.getElementById('root');
    // return results;
     results.map((result)=>{
        const box = document.createElement('div');
        let imgEl = document.createElement('img');
            imgEl.classList.add('main-img')
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        box.classList.add('box');
console.log(result.image);

         imgEl.src = result.image;
        p1.innerHTML = `SPECIES: ${result.species}`;
        p2.innerHTML = `STATUS: ${result.status}`;
        

        box.appendChild(imgEl)
        box.appendChild(p1)
        box.appendChild(p2)
       const main = rootEl.childNodes[4]
       
       main.appendChild(box);
      // main.appendChild(box);
       console.log(main)
       
     })
      return results;
   }

   charecter();
   
 // -------------------------------head

let rootEl = document.getElementById('root');

let headFunc = function(){
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

headFunc()

 // //----------------------------mainContainer
 
let mainContainer = function(){
  //  let results = await charecter();
  let main = document.createElement('div');
  main.classList.add('main');
    let insideContainer = document.createElement('div');
    insideContainer.classList.add('inside-main');
         //let flexContainer = document.createElement('div');
        //flexContainer.classList.add('flex-box');
        
     //   const sideEl = document.getElementsByClassName("headContainerClass");
        main.appendChild(insideContainer);
        rootEl.appendChild(main);
       // console.log(sideEl)
      //  console.log(results);

}

mainContainer();

// // -------------------------------------------------------sideBarContainer

let sideBarContainer = async function(){

    let results = await charecter();
  
    console.log(results);
    sideBarEl = document.createElement('div');
     sideBarEl.classList.add('sideBar-container');

    sideBarNavLinks = document.createElement('div');
    sideBarNavLinks.classList.add('side-Bar');

    sideBarEl.appendChild(sideBarNavLinks)
    rootEl.appendChild(sideBarEl);

    let ul = document.createElement("ul");
    results.map((result,index)=>{
         console.log(results.episode)
        let li =document.createElement("li")
        let links = document.createElement("a");

        links.text  = `Episode ${index+1}` 
        links.href  = result.episode[index]
        links.target = "_blank";

        li.appendChild(links);
        ul.appendChild(li);
        sideBarNavLinks.appendChild(ul);

    });
    let buttonEl = document.createElement('button');
    buttonEl.classList.add('sideBar-btn');
    buttonEl.textContent = 'Load';

    sideBarNavLinks.appendChild(buttonEl)

}

sideBarContainer();



