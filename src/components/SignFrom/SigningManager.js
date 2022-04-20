// import { initializeApp } from "firebase/app";
// import firebaseConfig from "./Signin/firebase.config";

// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
//   FacebookAuthProvider,
// } from "firebase/auth";

// export const initializeLoginFramework = () => {
//   if (initializeApp.length === 0) {
//     initializeApp(firebaseConfig);
//   }
//   initializeApp(firebaseConfig);
// };

// //Google
// export const handleSignInGoogle = () => {
//   const googleProvider = new GoogleAuthProvider();
//   const auth = getAuth();
//   return signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       //const credential = GoogleAuthProvider.credentialFromResult(result);
//       //const token = credential.accessToken;
//       const user = result.user;

//       const { displayName, photoURL, email } = user;

//       const signedInUser = {
//         isSignedIn: true,
//         name: displayName,
//         email: email,
//         photo: photoURL,
//         success: true,
//       };
//       return signedInUser;
//     })
//     .catch((error) => {
//       //   const errorCode = error.code;
//       //   const errorMessage = error.message;
//       //   const email = error.email;
//       //   const credential = GoogleAuthProvider.credentialFromError(error);
//     });
// };

// //Facebook
// export const handelSignInFacebook = () => {
//   const facebookProvider = new FacebookAuthProvider();
//   const auth = getAuth();
//   return signInWithPopup(auth, facebookProvider)
//     .then((result) => {
//       // The signed-in user info.
//       const user = result.user;
//       //const credential = FacebookAuthProvider.credentialFromResult(result);
//       //const accessToken = credential.accessToken;
//       // ...
//       user.success = true;

//       const { displayName, photoURL, email } = user;

//       const signedInUser = {
//         isSignedIn: true,
//         name: displayName,
//         email: email,
//         photo: photoURL,
//         success: true,
//       };
//       console.log(signedInUser);
//       return signedInUser;
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = FacebookAuthProvider.credentialFromError(error);
//       // ...
//       console.log("errorCode:", errorCode);
//       console.log("errorMessage:", errorMessage);
//       console.log("email:", email);
//       console.log("credential:", credential);
//     });
// };

// //Create Email & Password
// export const createUserWithEmailPassword = (name, email, password) => {
//   const auth = getAuth();
//   return createUserWithEmailAndPassword(auth, email, password)
//     .then((res) => {
//       // Signed in
//       const userDetails = res.user;
//       const newUserInfo = userDetails;
//       newUserInfo.error = "";
//       newUserInfo.success = true;
//       updateUserName(name);
//       return newUserInfo;
//     })
//     .catch((error) => {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       newUserInfo.success = false;
//       console.log("errorCode:", errorCode);
//       console.log("errorMessage:", errorMessage);
//       return newUserInfo;
//     });
// };

// // UpdateUserName : SetName
// const updateUserName = (name) => {
//   const auth = getAuth();
//   updateProfile(auth.currentUser, {
//     displayName: name,
//   })
//     .then(() => {
//       console.log("User Name Update Successfully");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// //Sign in Email & Password
// export const signInWithEmailPassword = (email, password) => {
//   const auth = getAuth();
//   return signInWithEmailAndPassword(auth, email, password)
//     .then((res) => {
//       // Signed in
//       const user = res.user;
//       const newUserInfo = res.user;
//       newUserInfo.error = "";
//       newUserInfo.success = true;
//       console.log(user);
//       return newUserInfo;
//     })
//     .catch((error) => {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("errorCode:", errorCode);
//       console.log("errorMessage:", errorMessage);
//       return newUserInfo;
//     });
// };
