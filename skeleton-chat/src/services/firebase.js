import firebase from 'firebase';

const config = {
  apiKey: // Insert an api key here!,
  authDomain: // Insert an auth domain here!,
  databaseURL: // Insert a url here!
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();