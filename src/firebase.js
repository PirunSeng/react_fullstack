import * as firebase from 'firebase'; // * means all, as new variable

const config = {
    apiKey: "AIzaSyCFm5gfblHXJf1OGTOIah5Ns1zkl3gZNVc",
    authDomain: "react-forms-test-8514e.firebaseapp.com",
    databaseURL: "https://react-forms-test-8514e.firebaseio.com",
    projectId: "react-forms-test-8514e",
    storageBucket: "react-forms-test-8514e.appspot.com",
    messagingSenderId: "386249540059"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();

// ADD/UPDATE

// firebaseDB.ref().set({
//   firstname: 'Pirun Seng',
//   lastname: '',
//   laptop: {
//     brand: 'Apple',
//     color: 'Space Gray',
//     model: 'Macbook Pro',
//   },
//   parents: ['Ratha', 'Thida']
// })
// firebaseDB.ref('firstname').set('Pirun Seng')
// firebaseDB.ref('laptop/brand').set('APPLE')
// firebaseDB.ref('skills').set(
//   ['Talking', 'Listenning']
// )
// firebaseDB.ref('eyes').set('blue')
// firebaseDB.ref('lastname').set(null)

// firebaseDB.ref().update({
//   firstname: 'Pirun Seng',
//
//   // bad
//   // laptop: {
//   //   brand: 'Apple'
//   // }
//
//   // good
//   'laptop/color': 'Space Gray'
// })
//   .then(() => {
//     console.log('Data updated!')
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// READ

// once is not realtime
// firebaseDB.ref('laptop/brand').once('value')
// .then((snapshot) => {
//   console.log(snapshot.val())
// })
// .catch((e) => {
//   console.log(e)
// })

// // on is realtime, starts listening from the server
// firebaseDB.ref().on('value', (snapshot)=>{
//   console.log(snapshot.val())
// })
//
// setTimeout(()=>{
//   firebaseDB.ref('firstname').set('Pirun')
// }, 3000)
//
// // STOP listening from the server
// setTimeout(()=>{
//   firebaseDB.ref().off();
// }, 4000)
//
// setTimeout(()=>{
//   firebaseDB.ref('firstname').set('Pirun Seng')
// }, 5000)

// firebaseDB.ref().on('child_removed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

// firebaseDB.ref().on('child_changed', (snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
// })

firebaseDB.ref().on('child_added', (snapshot)=>{
  console.log(snapshot.key, snapshot.val())
})
