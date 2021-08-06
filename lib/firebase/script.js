const add_club = require("./add_club");
const add_team = require("./add_team");
const { clubs } = require("./data");

clubs.forEach(({ name, team }) => {
  team.forEach((person) => {
    add_team(name, person);
  });
});

//clubs.forEach((obj) => {
//const temp_obj = new Object(obj);
//delete temp_obj["team"];
//add_club(temp_obj);
//});
