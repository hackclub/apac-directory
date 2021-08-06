const add = require("./add");

const data = {
  logo: "https://cloud-4nvqu7g0r-hack-club-bot.vercel.app/0cgchack.png",
  name: "Hack Club CGC",
  desc: "hack club cgc was founded in 2019 with a dream of making a cool tech community in cgc! we are now a happy team of 13 members.",
  ships: 0,
  hackathons: 0,
  meetings: 0,
  events: 0,
  points: 0,
  t_points: 0,
};

const add_club = (obj) => {
  add("clubs", obj.name, obj);
};

module.exports = add_club;
