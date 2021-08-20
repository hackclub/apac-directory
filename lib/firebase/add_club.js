const add = require("./add");

const data = {
  path: "",
  name: "Hack Club COET",
  desc: "hack club cgc was founded in 2019 with a dream of making a cool tech community in cgc! we are now a happy team of 13 members.",
  auth_group: ["U01TM2KUPCH"],
  members: ["U01TM2KUPCH"],
  cover:
    "https://cloud-lzk8azrls-hack-club-bot.vercel.app/0screen_shot_2021-08-05_at_10.58.22.png",
  logo: "https://cloud-4nvqu7g0r-hack-club-bot.vercel.app/0cgchack.png",
  ships: 0,
  meetings: 0,
  events: 0,
  hackathons: 0,
  points: 0,
  t_points: 0,
};

const add_club = (obj) => {
  add("clubs", obj.name, obj);
};

add_club(data);

module.exports = add_club;
