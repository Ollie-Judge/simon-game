let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

let gameContainer = document.getElementById("gameContainer");

let randomPatternArray = [];
let userPattern = [];

const randomNumberGenerator = () => {
  randomPatternArray.push(Math.floor(Math.random() * 4));
};
// take multiple events and check which one is rright

const startGame = () => {
  randomNumberGenerator();
  console.log(randomPatternArray);

  document.addEventListener("keypress", (event) => {
    keyPress(event.key);
  });

  function keyPress(key) {
    switch (key) {
      case "1":
        userPattern.push(1);
        console.log(`user ${userPattern}`);
        randomNumberGenerator();
        console.log(`random ${randomPatternArray}`);
        break;

      case "2":
        userPattern.push(2);
        console.log(`user ${userPattern}`);
        randomNumberGenerator();
        console.log(`random ${randomPatternArray}`);
        break;

      case "3":
        userPattern.push(3);
        console.log(`user ${userPattern}`);
        randomNumberGenerator();
        console.log(`random ${randomPatternArray}`);
        break;

      case "4":
        userPattern.push(4);
        console.log(`user ${userPattern}`);
        randomNumberGenerator();
        console.log(`random ${randomPatternArray}`);
        break;
      default:
        console.log(key);
    }

    /*gameContainer.addEventListener("click", (event) => {
      if (event.click === box1) {
        console.log("clicked box1");
      }
    });

    box2.addEventListener("click", (event) => {
      console.log("clicked box2");
    });

    box3.addEventListener("click", (event) => {
      console.log("clicked box3");
    });

    box4.addEventListener("click", (event) => {
      console.log("clicked box4");
    });*/
  }
};
