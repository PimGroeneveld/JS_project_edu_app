const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Flashcard = function(url) {
  this.url = url;
  this.request = new Request(url);
  this.languages = [];
};


Flashcard.prototype.bindEvents = function(){

  PubSub.subscribe('AddWordFormView:item-submitted', (event) => {
    this.postWord(event.detail);
  });
}

Flashcard.prototype.getData = function(){
  this.request.get()
  .then((languages) => {
    PubSub.publish('Languages:languages-data-ready', languages);
    // console.log(languages);
    this.publishByLanguage(languages);
  })
  .catch(console.error);
};

Flashcard.prototype.publishByLanguage = function(languages){
  this.languages = languages;

  PubSub.subscribe("SelectView:change", (event) => {
    const selectedLanguageWords =[];
    languages.forEach((language) => {
      // console.log(language, event);
      const selectedKeys=Object.keys(language.translation);
      if (selectedKeys.includes(event.detail)){
        selectedLanguageWords.push([language.translation[event.detail], language.English]);
      };
    });
    PubSub.publish("Flashcard:selected-language-and-answer", selectedLanguageWords);
    // console.log(selectedLanguageWords);
  });
};

Flashcard.prototype.postWord = function(word){
  // console.log('what is the word:', word);
  this.request.post(word)
  .then((languages) => {
    PubSub.publish('Languages:languages-data-ready', languages);
    // console.log("languages is:", languages);
  })
  .catch(console.error);
};

module.exports = Flashcard;
