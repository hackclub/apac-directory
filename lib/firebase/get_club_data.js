const { clubs } = require("./data");
const db = require("./firebase");

const get_club_data = async (path) => {
  const data = [];

  await db
    .collection("clubs")
    .where("path", "==", path)
    .get()
    .then((qs) => {
      qs.forEach(async (doc) => {
        const doc_data = await doc.data();
        data.push(doc_data);
      });
    });
  return data[0];
};

module.exports = get_club_data;
