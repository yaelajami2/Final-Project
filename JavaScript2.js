let n, d, v, txt, m, what, text, bt3, bt4,bt5, p1, t1, amount = 0, p2, j,j1;

let monim = [];
let maxm = 0, imax=-1,pro,sumanch=0,t9,bt9,bt10,bt11,bt12;


let buyNow = [];
function product(name, id, t, img, k) {
    this.name = name;
    this.id = id;
    this.price = t;
    this.img = img;
    this.kategory = k;


}


let ch, div5, sum = 0,tsum;
let products = [],buy,pend,tend,tp;
products[0] = new product("שניצל", 1, 45, "Food 2002.jpg", 0);

products[1] = new product("טורטיה", 2, 45, "Food 2086.jpg", 0);

products[2] = new product("דג", 3, 45, "Food 0605.jpg", 0);
products[3] = new product("אורז", 4, 30, "unnamed.jpg", 1);

products[4] = new product("עוף", 5, 30, "Food 095.jpg", 1);

products[5] = new product("בשר", 6, 30, "Food 0004.jpg", 1);
products[6] = new product("סופלה", 7, 20, "Food 1119.jpg", 2);

products[7] = new product("גלידה", 8, 20, "Food 1082.jpg", 2);

products[8] = new product("פאי תפוחים", 9, 20, "Food 0637.jpg", 2);


/*   let j = document.getElementsByName("class");*/
//function all() {
//    window.open("תפריט חדש.html");
//}
function c() {
    document.getElementById("demo1").innerHTML = "";
    let arr1 = document.getElementsByName("class");

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i].checked == true) {
            what = i;
            break;
        }
    }
    for (var i = 0; i < 3; i++) {
    monim[i] = 0;
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
            n.setAttribute("id", products[i].id)
            d = document.createElement("h2");

            txt = document.createTextNode(products[i].name);
            d.appendChild(txt);
            n.appendChild(d);


            //price
            id = document.createElement("h3");
            txt = document.createTextNode(products[i].id-1);
            id.appendChild(txt);
            n.appendChild(id);

            //img

            m = document.createElement("img");
            m.setAttribute("src", products[i].img);
            n.appendChild(m);


            //describt
            t = document.createElement("h3")
            txt = document.createTextNode(products[i].price);
            t.appendChild(txt);
            n.appendChild(t);

            p1 = document.createElement("p");
            p2 = document.createElement("p");
            p2.setAttribute("class", "chn");
            p2.setAttribute("id", "num"+ i);
            bt3 = document.createElement("input");
            bt4 = document.createElement("input");
            bt3.setAttribute("type", "button");
            bt4.setAttribute("type", "button");
            bt3.setAttribute("id","num"+ i);
            bt4.setAttribute("id","num"+ i);
            bt3.setAttribute("value", "+");
            t1 = document.createTextNode(0);
            bt4.setAttribute("value", "-");
            bt3.addEventListener("click", function () {
               
                //monim[i] = parseInt{monim[i]};
                //monim[i]++;
                //document.getElementById("chn").innerText = monim[i];
                //p2 = document.createTextNode(monim[i]);
                j = event.target.id;
                console.log(j)
                j1= j.substr(3,1)
                buyNow.push(products[j1]);
               
                console.log(buyNow)
               
                ch= document.querySelectorAll("p");
                for (var i = 0; i < ch.length; i++) {
                    if (ch[i].id == j) { 
                        ch[i].innerText ++;
                    }
                }
              
            });
            bt4.addEventListener("click", function () {

                //monim[i] = parseInt{monim[i]};
                //monim[i]++;
                //document.getElementById("chn").innerText = monim[i];
                //p2 = document.createTextNode(monim[i]);
                j = event.target.id;

               
                ch = document.querySelectorAll("p");
                for (var i = 0; i < ch.length; i++) {
                    if (ch[i].id == j && ch[i].innerText > 0) {
                        ch[i].innerText--;
                    }
                }

            });


            p1.appendChild(bt3);
            p2.appendChild(t1);
            p1.appendChild(p2);
            // p1.appendChild(t1);
            p1.appendChild(bt4);
            n.appendChild(p1);





           document.getElementById("demo").appendChild(n); 
        }
    }
    bt5 = document.createElement("input");
    bt5.setAttribute("type","button");
    bt5.setAttribute("value", "עגלת קניות");
    document.getElementById("demo1").appendChild(bt5);
  
   

    bt5.addEventListener("click", function () {
        buy = document.querySelectorAll("p .chn");
        sum = 0;
        document.getElementById("demo").innerHTML = "";
        document.getElementById("demo1").innerHTML = "";
        bt9 = document.createElement("input");
        bt10 = document.createElement("input");
        bt11 = document.createElement("input");
        bt9.setAttribute("type", "password");
        bt12 = document.createElement("button");
        bt9.setAttribute("type", "name");
        bt10.setAttribute("type", "password");
        bt9.setAttribute("value", "תעודת זהות");
        bt12.setAttribute("class", "w3 - button w3 - block w3 - section w3 - blue w3 - ripple w3 - padding");
        
        bt10.setAttribute("value", "אשראי");
        bt11.setAttribute("value", "שם");
        for (var i = 0; i < buyNow.length; i++) {
            console.log(buy)
          
            // if (parseInt(buy[i].innerText) != 0) {
            monim[buyNow[i].kategory]++;
                console.log(products[i].price)
                console.log(parseInt(buy[i].innerText))
            // sum += products[i + products[i].kategory * 3].price * parseInt(buy[i].innerText);
            sum += buyNow[i].price;
                pend = document.createElement("div");
            tend = document.createTextNode("שם:" +  buyNow[i].name + " ");
                pend.appendChild(tend);
            tp = document.createTextNode("מחיר:" + buyNow[i].price +" ");
                pend.appendChild(tp);

              //if (i == (buy.length - 1)) {
               
              // }
         }
            tsum = document.createTextNode("הסכום לתשלום:" + sum);
        pend.appendChild(tsum);

        pend.appendChild(bt9);
        pend.appendChild(bt10);
        pend.appendChild(bt11);
        t1 = document.createTextNode("שליחה");
        bt12.append(t1);
        pend.appendChild(bt12);
           document.body.appendChild(pend);
     
    });


    bt5.addEventListener("click", function () {
        maxm = 0;

    for (var i = 0; i < 3; i++) {
        if (monim[i]!=0&&monim[i]>maxm) {
            maxm = monim[i];
            imax = i;

        }
     
         
        
        }
        if (imax == 0) {
            alert("מגיע לך הנחה של 50%");
            sumanch = sum * 0.5;
            t9 = document.createTextNode("מחיר לאחר הנחה:"+sumanch);
            document.body.appendChild(t9);
        }
        if (imax == 1) {
            alert("מגיע לך הנחה של 30%");
            sumanch = sum * 0.7;
            t9 = document.createTextNode("מחיר לאחר הנחה:"+sumanch);
            document.body.appendChild(t9);
        }
        if (imax == 2) {
            alert ("מגיע לך הנחה של 20%");
            sumanch = sum * 0.8;
            t9 = document.createTextNode("מחיר לאחר הנחה:"+sumanch);
    document.body.appendChild(t9);
    }
  
    });   
     
   
   


   
}
let x, y;
function but() {
    x = prompt("הכנס שם:");
    y = prompt("הכנס סיסמא:");
    if (x == "דוד כהן" && y == 1234)
    introduct();
}
let cost = [45, 30, 20];
let pre, child, b1, p, nameproduct, b2, kind, count = 10, bt1, name, bt2;
function introduct() {
 
   
    //הוספת שם
    pre = document.createElement("p");
    child = document.createTextNode("הכנסת שם מוצר חדש:");
    pre.appendChild(child);
    b1 = document.createElement("input");

    //p = document.createTextNode("");
    b1.setAttribute("type", "text");
    pre.appendChild(b1);
    document.getElementById("l").appendChild(pre);

    //הוספת קטגוריה
    let br = document.createElement("br");
    document.getElementById("l").appendChild(br);
    nameproduct = document.createTextNode("קטגוריה:");
    pre.appendChild(nameproduct);
    b2 = document.createElement("input");

    //p = document.createElement("p");
    //p.setAttribute("id", "p");
    //pre.appendChild(p)

    b2.setAttribute("type", "number");
    pre.appendChild(b2);
    document.getElementById("l").appendChild(pre);
    b2.setAttribute("id", "1");
    b2.addEventListener("focus", function () {


        document.getElementById("p").innerHTML = ""


    });
    b2.addEventListener("keypress", function () {

        if (document.getElementById("1").value !== 0 || document.getElementById("1").value !== 1 || document.getElementById("1").value !== 2)
            document.getElementById("p").innerHTML = "הכנס מספר בין 0-2"

    
    });
   
    

    bt1 = document.createElement("INPUT");
    bt2 = document.createElement("input");
    bt2.setAttribute("value", "הוסף");
    bt2.setAttribute("type", "button");
    bt1.setAttribute("type", "file");
    bt2.addEventListener("click", function () {
    let p9= new product(b1.value, count, cost[b2.value], bt1.value, b2.value);

        products.push(p9);  
        count++;
      document.getElementById("l").innerHTML = "";

    });
    pre.appendChild(bt1);
    pre.appendChild(bt2);

    document.getElementById("l").appendChild(pre);
   
}
function openMe() {
    window.open("newMenu.html");
}

