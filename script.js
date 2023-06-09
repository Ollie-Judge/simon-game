let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

let gameContainer = document.getElementById("gameContainer");

let randomPatternArray = [];
let userPattern = [];

let level = 0;

const randomNumberGenerator = () => {
  randomPatternArray.push(Math.floor(Math.random() * 4) + 1);
};

randomNumberGenerator();
console.log(randomPatternArray);

const clickBox1 = () => {
  userPattern.push(1);
  level++;
  console.log(userPattern);
  console.log(level);
  check();
};

const clickBox2 = () => {
  userPattern.push(2);
  level++;
  console.log(userPattern);
  console.log(level);
  check();
};

const clickBox3 = () => {
  userPattern.push(3);
  level++;
  console.log(userPattern);
  console.log(level);
  check();
};

const clickBox4 = () => {
  userPattern.push(4);
  level++;
  console.log(userPattern);
  console.log(level);
  check();
};

console.log(userPattern);

// box1.console.log(`user ${userPattern}`);
// console.log(`random ${randomPatternArray}`);

const check = () => {
  if (userPattern.length === randomPatternArray.length) {
    console.log("same length");
    if (userPattern[level] === randomPatternArray[level]) {
      console.log("matching nubmers");
    }
  }
};
