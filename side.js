document.addEventListener("DOMContentLoaded", () => {
    //fetch data from the public api
    fetch("https://cataas.com/cat?json=true")
        .then(res => res.json())
        .then(data => {
           // console.log(data)
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
        <p id="p-Id"> Tags : ${element.tags}</p>
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
                console.log(gifs)
                document.querySelector(".image1").innerHTML = ``
                let gifsDiv = document.createElement("div")
                gifsDiv.className = `replacer2`
                gifsDiv.innerHTML = `
               <img src="https://cataas.com/cat/gif">
               `
                document.querySelector(".image1").appendChild(gifsDiv)

            });
    }
    //donation form 
    let loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
    
      let username = document.getElementById("username");
      let password = document.getElementById("password");
      let amount = document.getElementById("donate");
    
      if (username.value == "" || password.value == "") {
        alert("Ensure you input a value in both fields!");
      } else {
        // perform operation with form input
        alert("Thank you for your donation 💕");
        console.log(
          `This form has a username of ${username.value} and password of ${password.value} and donation amount = ${amount.value}`
        );
    
        username.value = "";
        password.value = "";
        amount.value = ""
      } 
    })
    })