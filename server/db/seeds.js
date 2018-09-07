use languages;
db.dropDatabase();

db.words.insertMany([
  {
    english: "Thank you",
    chinese: "你好",
    german: "Danke",
    dutch: "Dank je"
  },
  {
    english: "Hungry",
    chinese: "飢餓",
    german: "Hungrig",
    dutch: "Hongerig"
  },
  {
    english: "Swim",
    chinese: "游泳",
    german: "Schwimmen",
    dutch: "Zwemmen"
  },
  {
    english: "Please",
    chinese: "請",
    german: "Bitte",
    dutch: "Alsjeblieft"
  },
  {
    english: "Beer",
    chinese: "啤酒",
    german: "Bier",
    dutch: "Bier"
  },
  {
    english: "Wine",
    chinese: "紅酒",
    german: "Wein",
    dutch: "Wijn"
  },
  {
    english: "Cycling",
    chinese: "循環",
    german: "Radfahren",
    dutch: "Fietsen"
  },
  {
    english: "Good day",
    chinese: "美好的一天",
    german: "Schönen Tag",
    dutch: "Goede dag"
  },
  {
    english: "Goodbye",
    chinese: "再見",
    german: "Auf Wiedersehen",
    dutch: "Vaarwel"
  },
  {
    english: "Learning",
    chinese: "學習",
    german: "Lehrnen",
    dutch: "Leren"
  }


]);
