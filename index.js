const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // On click, select all of the balls and toggle the
  // "to-transparent" class, which either adds or removes
  // the "fadeToTransparent" keyframe animation.
  document.querySelectorAll(".ball").forEach((ball) => {
    ball.classList.toggle("to-transparent");
  });
});
