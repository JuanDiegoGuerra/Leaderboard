const scores = document.getElementById('scores');

const renderscores = (scoreList) => {
  let renderText = '';
  let poss;
  scoreList.forEach((score, idx) => {
    poss = '';
    if (idx % 2 === 0) {
      poss = 'poss-row';
    }
    renderText += `
        <div class="scores-row ${poss}">
          <p class="row-description">${score.user}: ${score.score}</p>
        </div>
        `;
  });
  scores.innerHTML = renderText;
};

export default renderscores;