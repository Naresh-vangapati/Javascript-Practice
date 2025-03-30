let container = document.createElement('div');
container.className = "container"
let image = document.createElement("img");
image.src = "https://images6.fanpop.com/image/photos/36600000/Tigers-image-tigers-36642865-1600-1200.jpg"
let h1 = document.createElement("h1");
h1.innerText = "Tiger image";
let p = document.createElement("p");
p.innerText = "Tiger is the greatest animal in the world";
container.append(image,h1,p)
document.body.appendChild(container)