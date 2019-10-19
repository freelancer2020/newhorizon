
function render() {
    try {
    let container = document.createElement("div");
    container.setAttribute("class", "gallery");
    let myGallery = document.getElementsByClassName("gallery")[0];
    myGallery.style.cssText = `
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
            img.src = result[i].src;
            myGallery.append(img);
        }
    })
    .catch(err => alert(err.message));

  document.bgColor = "red";
    } catch(err) {
        alert(err.message);
}

window.onclick = render;
