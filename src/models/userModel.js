const admin = require('firebase-admin');
const db = admin.firestore();

const usersCollection = db.collection('users');

const createUser = async (userData) => {
  const docRef = await usersCollection.add(userData);
  return docRef.id;
};

const getUserById = async (userId) => {
  const doc = await usersCollection.doc(userId).get();
  if (!doc.exists) {
    throw new Error('No such user!');
  }
  return doc.data();
};

module.exports = {
  createUser,
  getUserById
};
