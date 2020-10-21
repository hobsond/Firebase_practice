const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.try_sum = functions.https.onRequest((req, res), () => {
  const data = req.query.text;
});
