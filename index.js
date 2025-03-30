// let div1 = document.getElementById("text-1");
// div1.innerText = "javascript";

// let div2 = document.getElementById("text-2");
// div2.innerText = "pakodi"


// let flag = window.confirm("Do you really want to change the color");

// if (flag){
//     div1.style.background = "yellow"
// }else{
//     div1.remove()
// }


// to change color

// function callhim(){
//     let container = document.getElementById("container");
//     container.style.background = "green"
//     document.body.style.background = "red"

// }

// // to delete container
// function Delete(){
//     let container = document.getElementById("container");
//     container.remove()

//     // or

//     container.style.display = "none"

//     // or

//     container.style.opacity = "0"
// }



// to show the animals in the container by using functions


let container = document.getElementById("container");
let image = document.createElement("img");


function cat(){
    image.src = "https://www.zastavki.com/pictures/1920x1200/2012/Animals_Cats_Beautiful_kitten_033169_.jpg"
    container.appendChild(image)
}

function dog(){
    image.src ="https://wallpapercave.com/wp/wp9015508.jpg"
    container.appendChild(image)
}

function tiger(){
    image.src = "https://www.wallpaperflare.com/static/944/948/836/altaic-warrior-wild-life-photography-wallpaper.jpg"
    container.appendChild(image)
}

function lion(){
    image.src = "https://wallup.net/wp-content/uploads/2016/01/186050-lion-animals.jpg"
    container.appendChild(image)
}
