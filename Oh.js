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
   zccc = zcv * -1 ;
   zcc = zccc.toFixed(3) ;
}
else{
    zcc = zcv.toFixed(3)
}




let zvv = zy ;

let zb = 0.819 * zo ; 
let zbv = zb + zzm


if (zz < 0 ){
    zbbb = zbv * -1 ;
    zbb = zbbb.toFixed(3) ;
 }
 else{
     zbb = zbv.toFixed(3) ;
 }





document.getElementById("ox").value = + zcc ;
document.getElementById("oy").value = + zvv ;
document.getElementById("oz").value = + zbb ;



}

