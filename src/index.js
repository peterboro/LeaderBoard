import './style.css';
import Scoreboard from './scoreboard.js';
import Task from './Task.js';

const addForm = document.querySelector('form');
const nameValue = document.querySelector('#name');
const scoreValue = document.querySelector('#score');
const refresh = document.querySelector('button');

const scoreboard = new Scoreboard();
const task = new Task();

let gameId;
const startGame = () => {
  scoreboard
    .startGame('Project')
    .then((response) => response.result.split(' '))
    .then((res) => {
      [gameId] = [res[1]];
    });
};

const getScores = () => {
  scoreboard.getScores(gameId).then((response) => task.addToTask(response.result));
};

const postScore = () => {
  scoreboard.postScore(gameId, nameValue.value, scoreValue.value);
  task.cleanInputs();
};

document.addEventListener('DOMContentLoaded', startGame);
addForm.addEventListener('submit', postScore);
refresh.addEventListener('click', getScores);
