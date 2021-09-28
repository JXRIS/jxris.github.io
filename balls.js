const windowWidth = window.innerWidth;
var numBalls; //To be updated
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
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `0vh`;
  ball.style.transform = `scale(${Math.random()})`;
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
      duration: "1.5s", // random duration
      direction: "alternate",
      fill: "both",
      iterations: 10,
      easing: "ease-in-out"
    }
  );
})
