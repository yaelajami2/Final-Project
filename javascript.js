let n, d, v, txt, m, what, text;
function product(name, id, t, img, k) {
    this.name = name;
    this.id = id;
    this.price = t;
    this.img = img;
    this.kategory = k;


}

products = [];
products[0] = new product("שניצל", 1,45, "Food 2002.jpg", 0);

products[1] = new product("טורטיה", 2,45, "Food 2086.jpg", 0);

products[2] = new product("דג", 3,45, "Food 0605.jpg", 0);
products[3] = new product("אורז", 4,30, "unnamed.jpg", 1);

products[4] = new product("עוף", 5,30, "Food 095.jpg", 1);

products[5] = new product("בשר", 6,30, "Food 0004.jpg", 1);
products[6] = new product("סופלה", 7,20 ,"Food 1119.jpg", 2);

products[7] = new product("גלידה", 8,20, "Food 1082.jpg", 2);

products[8] = new product("פאי תפוחים", 9,20 ,"Food 0637.jpg", 2);


/*   let j = document.getElementsByName("class");*/
//function all() {
//    window.open("תפריט חדש.html");
let bt3, bt4, pl, p2, amount0 = 0, num = 0, who = 0;
let monim = [];
for (var i = 0; i < 9; i++) {
    monim[i] = 0;
}
let index = 0;
//}
function c() {
    amount = 0
    let arr1 = document.getElementsByName("class");

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i].checked == true) {
            what = i;
            break;
        }
    }
    document.getElementById("demo").innerHTML = "";

    // what = j[0].checked; 
    console.log(what);
    //if (what == 0)
    //    document.getElementById("demo").innerHTML = "drink";
    //else
    //    document.getElementById("demo").innerHTML = "frouti";

   

    for (var i = 0; i < products.length; i++) {

        if (products[i].kategory == what) {
           
            n = document.createElement("div");
            d = document.createElement("h2");
 
            txt = document.createTextNode(products[i].name);
            d.appendChild(txt);
            n.appendChild(d);


            //price
            id = document.createElement("h3");
            txt = document.createTextNode(products[i].id);
            id.appendChild(txt);
            n.appendChild(id);
    
            //img

            m = document.createElement("img");
            m.setAttribute("src", products[i].img);
            n.appendChild(m);
            document.getElementById("demo").appendChild(n);

            //describt
            t = document.createElement("h3")
            txt = document.createTextNode(products[i].price);
            t.appendChild(txt);
            n.appendChild(t);

            ///הוספה לסל
            pl = document.createElement("p");
            pl.setAttribute("id", "delete");
            
            bt3 = document.createElement("input");
            bt4 = document.createElement("input");
            bt3.setAttribute("type", "button");
            bt4.setAttribute("type", "button");
            bt3.setAttribute("value", "+");
            bt4.setAttribute("value", "-");
           
            bt3.addEventListener("click", function () {
                monim[i]++;
                //document.getElementById("delete").innerHTML = "";
                p2 = document.createTextNode(amount);
                document.getElementById("delete").innerHTML = monim[i];
                         
               

            });
            bt4.addEventListener("click", function () {
                monim[i]--;
                document.getElementById("delete").innerHTML = "";
                p2 = document.createTextNode(amount);
                document.getElementById("delete").innerHTML = "";



            });
           
            p2 = document.createTextNode(amount);
            n.appendChild(bt3);
            pl.appendChild(p2);
            n.appendChild(pl);
            n.appendChild(bt4);
        }
    }
}
function add() {
   
}
function less() {
    amount--;
}


  

