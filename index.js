let url="https://www.omdbapi.com/?i=tt3896198&apikey=8c4eecee";

let s=document.getElementById("search");

s.addEventListener("click",()=>{
    throtthled(getData,3000)
})
let flag=false;
function throtthled(fun,delay){

    if(flag == true){
        return
    }
    fun()
    flag=true;
    setTimeout(()=>{
        flag=false;
    },delay)
}

async function getData(){
    let input=document.getElementById("first").value;
    console.log(input);
    let a= await fetch(`${url}&s=${input}`);
    let b= await a.json();
    console.log(b.Search)
    let c=b.Search
    display(c)
}

function display(obj){
    document.getElementById("container").innerHTML=""
    obj.forEach((v)=>{
        let div=document.createElement("div")
        let image=document.createElement("img");
        image.src=v.Poster;
        image.addEventListener("click",()=>{
            displayDetial(v)
        })
        div.append(image)
        document.getElementById("container").append(div);
    })
}

function displayDetial(v){
    document.getElementById("container").innerHTML="";
    let div=document.createElement("div");
    div.setAttribute("id","detial");
    let image=document.createElement("img");
    image.src=v.Poster;
    let title=document.createElement("h3");
    title.textContent=`Movie:${v.Title}`;
    let year=document.createElement("h3");
    year.textContent=`Year:${v.Year}`;
    let id=document.createElement("h3");
    id.textContent=`Id:${v.imdbID}`;
    div.append(image,title,year,id)
    document.getElementById("container").append(div);
}