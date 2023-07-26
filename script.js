// // ale rt(" hello dbs ");
// // var a=12;
// // var b=2;
// // let c=3;
// // var mul=a*b*c;
// // // document.write( "the sum is ",sum)
// // document.write("the mul is \n hkjehkeh<br>k",mul)
// // document.write("hello m<br>")
// // console.log("hello \n df  <br>")
// // let x=32
// // document.write(x)
// // let r=23
// // const pi=3.1415
// // let area=pi*r*r
// // document.write("<br>the area is ",area)
// let fname="Pokhara"
// let lname="Kaski"
// document.write(fname+ "   "+lname,"<br>")
// document.write(fname)
// document.write(lname)
// //condition

// let myage=20;
// if(myage>20)
// {
// document.write("<br>you can married")
// }
// else if(myage==20){
// document.write("<br>you can have gf<br>")
// }
// else{
//     document.write("you can not married")
// }
function showdate(){
    
    // document.getElementById('btn').innerHTML=Date();
    // // document.write("jgdjs")
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
var currentMinutes =currentTime.getMinutes();
var greeting;
if( currentHour>=0 && currentHour<=12)
{
    document.write("good morning: the currnet time is ->",document.getElementById('btn').innerHTML=Date())
}
else{
    document.write("good evening: the current time is ",document.getElementById('btn').innerHTML=Date())
}
}
