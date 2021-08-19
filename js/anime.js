const element = document.getElementById("name");
var count = 0;
var ang = 1;
var num = 0;
var moving_ele;


//Start moving
function Move() {
  count++;
  if(count>1){
    clearInterval(moving_ele)
  }
  moving_ele = setInterval(Anim, 10);
  
}
function Anim() {
  element.style.transform = "rotate(" + ang + "deg)";
  ang = 720 * Math.cos((num * Math.PI) / 180);
  console.log(ang + "\n");
  console.log(num + "\n");
  num += 1;
  return ang, num;
}
//stop moving
function Stop() {
  clearInterval(moving_ele);
}
//reset All values
function Reset() {
  clearInterval(moving_ele);
  ang = 1;
  num = 0;
  element.style.transform = "rotate(0deg)";
  return (ang = 1), (num = 0);
}
