import firebase from 'firebase';

const config = {
  apiKey: // api key,
  authDomain: // auth domain,
  databaseURL: // database url
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();