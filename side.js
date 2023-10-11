document.addEventListener("DOMContentLoaded", () => {
    //fetch data from the public api
    fetch("https://cataas.com/cat?json=true")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //display the image on the page
            let imageDiv = document.createElement("div")
            imageDiv.className = "images"
            imageDiv.innerHTML = `
         <img src="https://cataas.com/${data.url}">
        `
            document.querySelector(".image1").appendChild(imageDiv)
            //eventlistener to change the image
            document.querySelector("#random").addEventListener("click", () => {
                changeButton();
            })
        })
        //function that changes the image displayed and replaces it
    function changeButton() {
        fetch("https://cataas.com/cat?json=true")
            .then(res => res.json())
            .then(element => {
                document.querySelector(".image1").innerHTML = ``
                let imageDiv2 = document.createElement("div")
                imageDiv2.className = `replacer`
                imageDiv2.innerHTML = `
        <img src="https://cataas.com/${element.url}">
        `
                document.querySelector(".image1").appendChild(imageDiv2)
            })
    }
    //eventlistener to the gifs button
    document.querySelector("#gifs").addEventListener("click", () => {
        giveGif();
    })
    //function that changes the main dispay into a gif
    function giveGif() {
        fetch("https://cataas.com/cat?type=gif&json=true")
            .then(res => res.json())
            .then(gifs => {
                document.querySelector(".image1").innerHTML = ``
                let gifsDiv = document.createElement("div")
                gifsDiv.className = `replacer`
                gifsDiv.innerHTML = `
               <img src="https://cataas.com/cat/gif">
               `
                document.querySelector(".image1").appendChild(gifsDiv)

            });
    }
    //fetch the tags from the public API
   // function imageTag(){
    fetch("https://cataas.com/api/tags")
    .then(res => res.json())
    .then(element=> {
        console.log(element)
        const val = document.querySelector("input").value;
        console.log(val)
        console.log(element.tag)
        document.getElementById("tag").addEventListener("click",()=>{
           document.querySelector(".image1").innerHTML=``
           let tagDiv = document.createElement("div")
           tagDiv.className="tagsList"
           tagDiv.innerHTML=`
           <img src= "https://cataas.com/cat/cute">
           `
           document.querySelector(".image1").appendChild(tagDiv)
        })
    })
})