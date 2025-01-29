function run()

{


let zx = parseFloat(document.getElementById("x").value);
let zy = parseFloat(document.getElementById("y").value);
let zz = parseFloat(document.getElementById("z").value);
let zo = parseFloat(document.getElementById("o").value);



let zc = 0.574 * zo ;
let zcc = zc + zx ;

let zvv = zy ;

let zb = 0.819 * zo ; 
let zbb = zb + zz



document.getElementById("ox").value = + zcc ;
document.getElementById("oy").value = + zvv ;
document.getElementById("oz").value = + zbb ;

}

