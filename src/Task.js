export default class Task {
  constructor() {
    this.list = document.querySelector('#list-board');
    this.nameInput = document.querySelector('#name');
    this.scoreInput = document.querySelector('#score');
  }

  addToTask(arr) {
    this.list.innerHTML = '';
    arr.forEach((el) => {
      this.list.innerHTML
      += `<td>${el.user}</td><td>${el.score} </td>`;
    });
  }

  cleanInputs() {
    this.nameInput.value = '';
    this.scoreInput.value = '';
  }
}