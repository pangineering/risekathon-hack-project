// {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//    }


const firebase = require("firebase/app");
const { getAuth } = require("firebase-admin/auth");
//const firebaseAdmin = require("firebase-admin");

const firebase_auth = require("firebase/auth");
const firebaseAdmin = require("firebase-admin/app");

const signUp = async (req, res, next) => {
  try {
    const auth = firebase_auth.getAuth();
    const data = req.body;
    const email = data.email;
    const password = data.password;
    //const auth = getAuth();
    firebase_auth.createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const signIn = async (req, res, next) => {
  try {
    const auth = firebase_auth.getAuth();
    const data = req.body;
    const email = data.email;
    const password = data.password;
    firebase_auth
      .signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        res.send("Sign In Successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.send(errorMessage);
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
};



module.exports = {
  signUp,
  signIn,
  
};
