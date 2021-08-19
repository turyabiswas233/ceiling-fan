//lesson 14 ==>
const Name = document.getElementById("name");
let i = 0;
function increase() {
  i += 1;
  if (i > 10) {
    alert("value exceded!!");
    i = 10;
  }
  Name.innerHTML = i;

  // if (Name.innerHTML === "Turya") {
  //   Name.innerHTML = "Shuvra";
  // }
  // else if (Name.innerHTML === 'Shuvra') {
  //   Name.innerHTML = "Turya";
  // }
}
function decrease() {
  i -= 1;
  if (i < 0) {
    Name.innerHTML = 0;
    alert('Can\'t decrease below `0`...');
    i = 0;
  }
  Name.innerHTML = i;

}
