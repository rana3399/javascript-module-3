var rootEl = document.getElementById('root');
var mainContainer = document.createElement('div')
mainContainer.classList.add('mainContainerDiv')



// --------------------------------head

let headFunc = function () {
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


const left = document.createElement('div');
left.classList.add("sideBar-container");
const insideDiv = document.createElement('div');
insideDiv.classList.add("side-Bar");

let right = document.createElement('div')
right.classList.add("mainDiv");

mainContainer.appendChild(right)

left.appendChild(insideDiv)
mainContainer.appendChild(left);
rootEl.appendChild(mainContainer);


//const result = episodes()
// console.log(links)

// ------------Episodes
const head_of_main = document.createElement('div');
head_of_main.classList.add("head_of_main");

let h3 = document.createElement('h3');
h3.classList.add("h3_class");
let p1 = document.createElement('p');
p1.classList.add("p1");
let p2 = document.createElement('p');
p2.classList.add("p2");

head_of_main.appendChild(h3)
head_of_main.appendChild(p1)
head_of_main.appendChild(p2)

right.appendChild(head_of_main);

const charecter_in_main = document.createElement('div');
head_of_main.classList.add("charecter_in_main");

const img = document.createElement('img');
img.classList.add("charecter_IMG");
charecter_in_main.appendChild(img);
right.appendChild(charecter_in_main)



episodes = async (number) => {

    const url = `https://rickandmortyapi.com/api/episode/${number}`;
    const response = await fetch(url);
    const results = await response.json();

    h3.innerHTML = results.name;
    p1.innerHTML = results.air_date
    p2.innerHTML = results.episode

    results.characters.map(async (char) => {
        // console.log(char);
        let char_api = await fetch(char);
        const char_results = await char_api.json();
        // console.log(char_results);
        img.src = char_results.image;

    })







}

const loadLinks = async () => {
    let url = "https://rickandmortyapi.com/api/episode";
    let response = await fetch(url);
    let result = await response.json();
    let ul = document.createElement("ul")
    ul.classList.add("ul");

    result.results.map((id) => {

        let li = document.createElement("li")
        li.classList.add("li");
        let links = document.createElement('a');
        links.classList.add("links");

        links.text = `Episode ${id.id}`;
        links.href = "#"
        links.addEventListener("click", () => episodes(id.id));

        li.appendChild(links);
        ul.appendChild(li)

    })
    insideDiv.appendChild(ul);


}
loadLinks();

















































  // ---------------charecter

// charecter = async function (){

//    const results =  episodes();


    // const main = document.createElement('div');
    // main.classList.add('mainDiv');

    //  results.map((result)=>{
    //     const box = document.createElement('div');
    //     let imgEl = document.createElement('img');
    //         imgEl.classList.add('main-img')
    //     let p1 = document.createElement('p');
    //     let p2 = document.createElement('p');
    //     box.classList.add('box');
    // console.log(result.image);

    //      imgEl.src = result.image;
    //     p1.innerHTML = `SPECIES: ${result.species}`;
    //     p2.innerHTML = `STATUS: ${result.status}`;

    //     box.appendChild(imgEl)
    //     box.appendChild(p1)
    //     box.appendChild(p2)

    //    main.appendChild(box);
    //    mainContainer.appendChild(main);
    //    rootEl.appendChild(mainContainer)
    //   // main.appendChild(box);
    //    console.log(main)

    //  })
//       return results;
//    }

   //charecter();


//---------------sideBarContainer

// let sideBarContainer = async function(){

//     const results = await episodes();

//     console.log(results);
//     sideBarEl = document.createElement('div');
//      sideBarEl.classList.add('sideBar-container');

//     sideBarNavLinks = document.createElement('div');
//     sideBarNavLinks.classList.add('side-Bar');

//     sideBarEl.appendChild(sideBarNavLinks)
//     mainContainer.appendChild(sideBarEl);
//     rootEl.appendChild(mainContainer);

//     let ul = document.createElement("ul");
//     results.map((result,index)=>{
//         // console.log(results.episode)
//         let li =document.createElement("li")
//         let links = document.createElement("a");

//         links.text  = `Episode ${index+1}` 
//         links.href  = result.episode[index]
//         links.target = "_blank";

//         li.appendChild(links);
//         ul.appendChild(li);
//         sideBarNavLinks.appendChild(ul);
//        // console.log(links)

//     });
//     let buttonEl = document.createElement('button');
//     buttonEl.classList.add('sideBar-btn');
//     buttonEl.textContent = 'Load';

//     sideBarNavLinks.appendChild(buttonEl)
// }

// sideBarContainer();



// 



