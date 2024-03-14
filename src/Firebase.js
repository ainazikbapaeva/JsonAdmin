// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAZ36Z1JH-FyvIQex8E2u8QpZVHlD8t4JI",
//   authDomain: "json-41ad6.firebaseapp.com",
//   projectId: "json-41ad6",
//   storageBucket: "json-41ad6.appspot.com",
//   messagingSenderId: "539761435717",
//   appId: "1:539761435717:web:5e4ea8100e8590cd236f2c",
// };
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFhXFFF9D9JdK6SH5dzZxJKgPPVTDhxEs",
  authDomain: "profiljson.firebaseapp.com",
  projectId: "profiljson",
  storageBucket: "profiljson.appspot.com",
  messagingSenderId: "457922738015",
  appId: "1:457922738015:web:ffaebe08f1a39f2b58e8ea",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
