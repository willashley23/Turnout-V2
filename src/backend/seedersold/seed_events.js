const Event = require('../models/event');

const getRandom = (arr) => {
  return arr[[Math.floor(Math.random() * arr.length)]];
}

const titles = ["Speed dating for San Francisco Singles", "Poolside Day Party", "Lucas Med and Friends"];
const locations = ["San Francisco, CA", "Austin, TX", "Erath, LA"];
const description = "lorem ipsumloremloremloremloremloremloremloremloremloremloremlorem";
const date = "2011-12-14";
const imageUrls = [
  "https://thumbs.dreamstime.com/z/birthday-party-3382261.jpg",
  "http://image.shutterstock.com/display_pic_with_logo/722392/221432176/stock-photo-funny-grandma-s-studio-portrait-wearing-eyeglasses-and-baseball-cap-who-shows-her-f-finger-221432176.jpg",
  "https://static3.depositphotos.com/1001951/142/i/950/depositphotos_1421004-stock-photo-cyber-woman-with-a-corn.jpg",
];

const generateRandomEvents = () => {
  for (let index = 0; index < 3; index++) {
    Event.create({
      title: getRandom(titles),
      imageUrl: getRandom(imageUrls),
      location: getRandom(locations),
      description: description,
      date: date,
    });
  }
}

module.exports = generateRandomEvents;
