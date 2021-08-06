const db = require("./firebase");

const get_all_clubs = async () => {
  const data = [];

  await db
    .collection("clubs")
    .orderBy("points", "desc")
    .get()
    .then((qs) => {
      qs.forEach(async (doc) => {
        data.push(await doc.data());
      });
    });
  return data;
};

module.exports = get_all_clubs;
