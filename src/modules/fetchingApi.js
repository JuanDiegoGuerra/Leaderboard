const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lyyHMBWzgAOEuOOl3eGh/scores/';

export const getScores = async () => {
  const response = await fetch(apiUrl);
  const jsonData = await response.json();
  return jsonData.result;
};

export const addScore = async (user, score) => {
  const newScore = {
    user,
    score,
  };
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  const jsonData = await response.json();
  return jsonData.result;
};