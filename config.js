import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCp7_8pfb2otk6tClVNfoZLhaLuown0s1A',
  authDomain: 'wireless-buzzer-app-f0750.firebaseapp.com',
  databaseURL: 'https://wireless-buzzer-app-f0750.firebaseio.com',
  projectId: 'wireless-buzzer-app-f0750',
  storageBucket: 'wireless-buzzer-app-f0750.appspot.com',
  messagingSenderId: '891864038135',
  appId: '1:891864038135:web:9c5feca1cbe042ab53b1f2',
  measurementId: 'G-6S7HSWH5WP',
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
