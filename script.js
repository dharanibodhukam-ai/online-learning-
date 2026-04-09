// Quiz logic
function checkAnswer(ans) {
  if (ans === 'a') {
    document.getElementById("result").innerText = "Correct ✅";
  } else {
    document.getElementById("result").innerText = "Wrong ❌";
  }
}

// Progress bar
let progress = 0;

function updateProgress() {
  progress += 20;
  if (progress > 100) progress = 100;

  document.getElementById("bar").style.width = progress + "%";
}