import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSisWyWDVjjbrQ6caF5-VN38eYAX6JaMA",
    authDomain: "crm-1337f.firebaseapp.com",
    projectId: "crm-1337f",
    storageBucket: "crm-1337f.appspot.com",
    messagingSenderId: "671532461284",
    appId: "1:671532461284:web:7d94d8fcc65345251cd0f1"
  };

  export default firebase.initializeApp(firebaseConfig);