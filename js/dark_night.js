const body = document.getElementById("body");
let h2;
const bodySty = body.style;
h2 = "#fff";
function ColorMode() {
  if (h2 === "#fff") {
    h2 = "#151515";
    bodySty.backgroundColor = '#151515';
    
    bodySty.filter = "invert(1)";
  } else if (h2 === "#151515") {
    h2 = "#fff";
    bodySty.backgroundColor = '#fff';
    
    bodySty.filter = "invert(0)";
  }
}
