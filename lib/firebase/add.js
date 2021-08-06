const db = require("./firebase");
const _ = require("ramda");

const fb_add = async (collection_id, doc_id, obj) =>
  await db
    .collection(collection_id)
    .doc(doc_id)
    .set(obj, { merge: true })
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });

const add = _.curry(fb_add);

module.exports = add;
