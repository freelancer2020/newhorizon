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
    let axa = document.createElement("div");
    axa.setAttribute("id", "poster");
    document.body.append(axa);
    let templ = document.getElementById("rock");
    let hoster = document.importNode(templ.cloneNode, true);
    axa.append(hoster);
}

window.onclick = render;