const admin = require('firebase-admin');
const serviceAccount = require('./config/firebaseConfig.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = require('./app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
