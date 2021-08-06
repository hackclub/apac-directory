const db = require("./firebase");
const get_club_data = require("./get_club_data");

const get_team_data = async (slug) => {
  const data = [];
  const { name } = await get_club_data(slug);

  await db
    .collection("clubs")
    .doc(name)
    .collection("team")
    .get()
    .then((qs) => {
      qs.forEach(async (doc) => {
        data.push(await doc.data());
      });
    });

  return data;
};

module.exports = get_team_data;
