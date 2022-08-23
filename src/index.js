import Scores from './modules/scores.js';
import Store from './modules/storage.js';
import './style.css';

class task {
  static currentScores() {
    const scores = Store.getScores();
    scores.forEach((board) => task.addScoreList(board));
  }

  static addScoreList(board) {
    const list = document.querySelector('#list-board');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${board.name}</td>
    <td>${board.score}</td>`;
    list.appendChild(row);
  }

  static clearField() {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }
}

document.addEventListener('DOMContentLoaded', task.currentScores);
document.querySelector('#board-input').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  if (name === '' || score === '') {
    task.showAlert('Please fill in all fields');
  } else {
    const board = new Scores(name, score);

    task.addScoreList(board);
    Store.addScore(board);
    task.clearField();
  }
});
