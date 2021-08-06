const db = require("./firebase");
const _ = require("ramda");

const add_team = async (club_name, person) =>
  await db
    .collection("clubs")
    .doc(club_name)
    .collection("team")
    .doc(person.name)
    .set(person, { merge: true })
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });

module.exports = add_team;
