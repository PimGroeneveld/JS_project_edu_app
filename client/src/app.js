const Flashcard = require('./models/flashcard.js');
const FlashcardView = require('./views/flashcard_view.js');
const FlashcardGridView = require('./views/flashcard_grid_view');

document.addEventListener('DOMContentLoaded', () => {
  const wordsUrl = 'http://localhost:3000/api/words';
  const flashcard = new Flashcard(wordsUrl);

});
