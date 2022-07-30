var firebaseConfig = {
    apiKey: "AIzaSyCCK5JHD9CSGqPpwCfOLNpjQKYmCDYcYXc",
  authDomain: "let-chat-web-app-63545.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-63545-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-63545",
  storageBucket: "let-chat-web-app-63545.appspot.com",
  messagingSenderId: "53908731332",
  appId: "1:53908731332:web:baf6f0919df23987172091"
  };
  

firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");

document.getElementById("welcome_user").innerHTML = "Welcome " + user_name+"!!";



function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
  });
  localStorage.setItem("ROOM NAME", room_name);

  window.location = "kwitter_page.html";
}


