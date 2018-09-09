import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDmVcodp4Lo93NQ2uOKPbcIh3oiqjamfLE",
    authDomain: "nba-react-full-stack.firebaseapp.com",
    databaseURL: "https://nba-react-full-stack.firebaseio.com",
    projectId: "nba-react-full-stack",
    storageBucket: "nba-react-full-stack.appspot.com",
    messagingSenderId: "22984753560"
};

firebase.initializeApp(config)

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot)=>{

    // let keyNum = parseInt(childSnapshot.key) + 1
    let keyNum = childSnapshot.val().id
    data.push({
      ...childSnapshot.val(),
      id: keyNum
    })
  });
  return data;
}

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
}
