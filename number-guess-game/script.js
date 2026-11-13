let answer;
let count = 0;
let finished = false;

// ゲーム開始
function resetGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  count = 0;
  finished = false;

  document.getElementById("guess").value = "";
  document.getElementById("count").textContent = count;
  document.getElementById("message").textContent =
    "数字を入力して挑戦！";

  document.querySelector(".number").textContent = "❓";
  document.getElementById("checkBtn").disabled = false;
}

// 数字を判定
function checkGuess() {
  if (finished) return;

  const input = document.getElementById("guess");
  const guess = Number(input.value);

  if (
    input.value.trim() === "" ||
    !Number.isInteger(guess) ||
    guess < 1 ||
    guess > 100
  ) {
    document.getElementById("message").textContent =
      "1〜100の整数を入力してください！";
    return;
  }

  count++;
  document.getElementById("count").textContent = count;

  if (guess === answer) {
    document.getElementById("message").textContent =
      `🎉 正解！${count}回で当たりました！`;

    document.querySelector(".number").textContent = answer;
    document.getElementById("checkBtn").disabled = true;
    finished = true;

  } else if (guess < answer) {
    document.getElementById("message").textContent =
      "もっと大きい数字です！⬆️";

  } else {
    document.getElementById("message").textContent =
      "もっと小さい数字です！⬇️";
  }

  input.value = "";
}

// 最初のゲームを開始
resetGame();