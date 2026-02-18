const shrinkBtn = document.getElementById('shrinkButton');
const growBtn = document.getElementById('growButton');

document.addEventListener('mousemove', (e) => {

  // ---------- SHRINK BUTTON ----------
  const shrinkRect = shrinkBtn.getBoundingClientRect();
  const shrinkX = shrinkRect.left + shrinkRect.width / 2;
  const shrinkY = shrinkRect.top + shrinkRect.height / 2;

  const shrinkDist = Math.hypot(e.clientX - shrinkX, e.clientY - shrinkY);

  let shrinkScale = 1;
  if (shrinkDist < 300) {
    shrinkScale = Math.max(0.00000000000000000001, shrinkDist / 300); 
    // closer = smaller
  }

  shrinkBtn.style.transform = `scale(${shrinkScale})`;


  // ---------- GROW BUTTON ----------
  const growRect = growBtn.getBoundingClientRect();
  const growX = growRect.left + growRect.width / 2;
  const growY = growRect.top + growRect.height / 2;

  const growDist = Math.hypot(e.clientX - growX, e.clientY - growY);

  let growScale = 1;
  if (growDist < 200) {
    growScale = 1 + (1 - growDist / 300); 
    // closer = bigger (max 2x size)
  }

  growBtn.style.transform = `scale(${growScale})`;
});
