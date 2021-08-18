const db = require("./firebase");
const get_club_data = require("./get_club_data");

const { pick, keys, filter } = require("ramda");

const get_posts_data = async (slug) => {
  const data = [];
  const { name } = await get_club_data(slug);

  await db
    .collection("clubs")
    .doc(name)
    .collection("posts")
    .orderBy("created", "desc")
    .limit(25)
    .get()
    .then((qs) => {
      qs.forEach(async (doc) => {
        const doc_data = await doc.data();

        const props = filter((key) => key != "created", keys(doc_data));

        data.push(pick(props, doc_data));
      });
    });

  return data;
};

module.exports = get_posts_data;
