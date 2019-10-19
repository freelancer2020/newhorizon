
const template = `
<template id = "rock">

<div id = "container">
<div id = "header"> JavaScript Modules </div>
<img src = "https://coherent-labs.com/posts/wp-content/uploads/2017/10/x6.png.pagespeed.ic.uaP8KPUyaZ.png">
</div>

<style>

#container {
    width: 100vw;
    height: 400px;
    background-color: #212121;
}

img {
    width: 400px;
    height: auto;
}

</style>

`;
function render() {
    let container = document.createElement("div");
    container.setAttribute("class", "gallery");
    let myGallery = document.getElementsByClassName("gallery")[0];
    myGallery.getElementsByClassName.cssText = `
    width: 100vw;
    height: 400px;
    display: flex;
    flex-direction: flex-row;
    `;
    document.body.append(myGallery);
    let url = "https://raw.githubusercontent.com/freelancer2020/newhorizon/master/modules/g-sm.json";
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(result => {
        for (let i = 0; i < result.length; i++) {
            let img = document.createElement("img");
            img.style.cssText = `width: 100px; height: 100px;`;
            img[i].src = result[i].src;
            container.append(img);
        }
    })

  document.bgColor = "red";
}

window.onclick = render;