// Your web app's Firebase configuration

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here

const firebaseConfig = {
  apiKey: 'AIzaSyCWFIj-T22He9LTL-EGQLx6_0ks8UXdds4',
  authDomain: 'vue-app-1ee6b.firebaseapp.com',
  databaseURL: 'https://vue-app-1ee6b.firebaseio.com',
  projectId: 'vue-app-1ee6b',
  storageBucket: 'vue-app-1ee6b.appspot.com',
  messagingSenderId: '594531673837',
  appId: '1:594531673837:web:9973e2642c4fd8ac61cee4'
  // measurementId: 'G-262VFJWC9C'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//   firebase.analytics()

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
