let i = 0;
class Mybutton extends HTMLButtonElement {
  constructor() {
    super();
    this.style.cssText = `
    width: 200px;
    height: 50px;
    background-color: lightgreen;
    color: #ffffff;
    font-size: 20px;
   `;
    this.addEventListener("click", function() {
      i++;
      this.setAttribute("value", i);
      this.textContent = this.getAttribute("value");  
  }                      
}
 customElements.define("my-btn", Mybutton, {extends: "button"});                         
                          
