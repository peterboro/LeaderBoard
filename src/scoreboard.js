import Task from './Task.js';

export default class Scoreboard {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  async startGame(gameName) {
    const jsonResponse = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        name: gameName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const response = await jsonResponse.json();
    return response;
  }

  async getScores(gameId) {
    const jsonResponse = await fetch(`${this.url}${gameId}/scores/`);
    const response = await jsonResponse.json();
    return response;
  }

  async postScore(gameId, name, score) {
    if (name === '' || score === '') {
      Task.showAlert('Please fill in all fields');
    }
    const jsonResponse = await fetch(`${this.url}${gameId}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: name, score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const response = await jsonResponse.json();
    return response;
  }
}