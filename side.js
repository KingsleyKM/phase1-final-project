document.addEventListener("DOMContentLoaded", () => {
    fetch("https://cataas.com/cat?json=true")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let imageDiv = document.createElement("div")
            imageDiv.className = "images"
            imageDiv.innerHTML = `
         <img src="https://cataas.com/${data.url}">
        `
            document.querySelector(".image1").appendChild(imageDiv)
            document.querySelector("#random").addEventListener("click", () => {
                changeButton();
            })
        })
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
    document.querySelector("#gifs").addEventListener("click", () => {
        giveGif();
    })
    function giveGif() {
        fetch("https://cataas.com/cat?type=gif&json=true")
            .then(res => res.json())
            .then(gifs => {
                document.querySelector(".image1").innerHTML = ``
                let gifsDiv = document.createElement("div")
                gifsDiv.className = `replacer`
                gifsDiv.innerHTML = `
               <img src="https://cataas.com/gif">
               `
                document.querySelector(".image1").appendChild(gifsDiv)

            });
    }
    fetch("https://cataas.com/api/cats?tags=cute")
    .then(res => res.json())
    .then(value => {
        console.log(value)
        let tags = document.createElement("li")
        let list = value.tags
        console.log(list)
        tags.className=`list_${value.id}`
        
        function loopingTags(){
            let text=''
            for(i = 0;i < list.length;i++){
            text += list[1]
            }
        }


        tags.innerHTML=`
         <p>${value.tags}
        `
    })
})