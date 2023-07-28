
var timeout = setTimeout("changimg()", 10000 );
let g, n,pt;
function changimg() {
    n = document.createElement("div");

   
    g = document.createElement("img");
    g.setAttribute("src", "Food 1119.jpg");
    n.appendChild(g);
 
    document.getElementById("demo1").appendChild(n);

   
}