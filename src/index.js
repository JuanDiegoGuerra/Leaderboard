import './styles.css';

import { getScores, addScore } from './modules/fetchingApi.js';
import renderscores from './modules/renderApiData.js';

const reloadBtn = document.getElementById('refresh-btn');
const form = document.getElementById('add-form');
const nameToAdd = document.getElementById('name');
const scoreToAdd = document.getElementById('score');

const renderListOnload = async () => {
  const scoresData = await getScores();
  renderscores(scoresData);
};

window.onload = renderListOnload();

reloadBtn.addEventListener('click', async () => {
  const scoresData = await getScores();
  renderscores(scoresData);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await addScore(nameToAdd.value, scoreToAdd.valueAsNumber);
  const scoresData = await getScores();
  renderscores(scoresData);
  nameToAdd.value = '';
  scoreToAdd.value = '';
});