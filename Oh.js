function run()

{


let zx = parseFloat(document.getElementById("x").value);
let zy = parseFloat(document.getElementById("y").value);
let zz = parseFloat(document.getElementById("z").value);
let zo = parseFloat(document.getElementById("o").value);


let zxm = Math.abs(zx);
let zzm = Math.abs(zz);


let zc = 0.574 * zo ;
let zcv = zc + zxm ;

if (zx < 0 ){
   zcc = zcv * -1
}
else{
    zcc = zcv
}




let zvv = zy ;

let zb = 0.819 * zo ; 
let zbv = zb + zzm


if (zz < 0 ){
    zbb = zbv * -1
 }
 else{
     zbb = zbv
 }





document.getElementById("ox").value.toFixed(3) = + zcc ;
document.getElementById("oy").value.toFixed(3) = + zvv ;
document.getElementById("oz").value.toFixed(3) = + zbb ;



}

