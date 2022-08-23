export default class Store {
  static getScores() {
    let scores;
    if (localStorage.getItem('scores') == null) {
      scores = [];
    } else {
      scores = JSON.parse(localStorage.getItem('scores'));
    }
    return scores;
  }

  static addScore(board) {
    const scores = Store.getScores();
    scores.push(board);
    localStorage.setItem('scores', JSON.stringify(scores));
  }

  static removeBook(score) {
    const scores = Store.getScores();
    scores.forEach((board, index) => {
      if (board.score === score) {
        scores.splice(index, 1);
      }
    });
    localStorage.setItem('scores', JSON.stringify(scores));
  }
}