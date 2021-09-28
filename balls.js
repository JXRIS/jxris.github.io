const windowWidth = window.innerWidth;
var numBalls; //Test jajaj
const balls = [];

if (windowWidth < 999) {
    numBalls = 7 * (1 + windowWidth / 1000);
}
else {
    numBalls = 10 * (1 + windowWidth / 10000);
}

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("img");
  ball.classList.add("ball");
  // ball.style.background = "#000";
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `0vh`;
  ball.style.transform = `scale(${Math.random()})`;
  // ball.style.width = `${Math.random()}em`;
  // ball.style.height = ball.style.width;
  ball.src = "./blackball.png"

  balls.push(ball);
  document.getElementById("ballcontainer").append(ball);
}

console.log(balls.length);
// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: 10,
      easing: "ease-in-out"
    }
  );
})
