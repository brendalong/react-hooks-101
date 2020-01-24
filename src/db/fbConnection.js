import firebase from 'firebase/app';
import config from './config';


const firebaseApp = () => {
  // check if firebase app exists.  If not initialize.
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

export default firebaseApp;