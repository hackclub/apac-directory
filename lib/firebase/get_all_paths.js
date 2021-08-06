const db = require("./firebase");

const get_all_paths = async () => {
  const paths = [];

  await db
    .collection("clubs")
    .orderBy("points", "desc")
    .get()
    .then((qs) => {
      qs.forEach(async (doc) => {
        const { path } = await doc.data();
        paths.push(path);
      });
    });
  return paths;
};

module.exports = get_all_paths;
