var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}




setInterval(myTimer, 1000);
function myTimer() {
  var date=new Date();
var hours=new Date().getHours();
var minutes=new Date().getMinutes();
var seconds=new Date().getSeconds();
var hourdata=24-hours;
if(10>hourdata){
  hourdata="0"+hourdata;
}
if(10>minutes){
  minutes="0"+minutes;
}
if(10>seconds){
  seconds="0"+seconds;
}
document.getElementById("data").innerHTML="Ending In "+hourdata+"Hours :"+minutes+" Min :"+seconds+"Sec";


}

var cursor=document.querySelector(".cursor");
var cursor2=document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
cursor.style.cssText=cursor2.style.cssText="left :"+e.clientX+"px; top: "+e.clientY+"px;";
});



