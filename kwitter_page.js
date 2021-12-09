const firebaseConfig = {
    apiKey: "AIzaSyDmW2C_02NJHwguCShihs5YxC4W4-MgLtA",
    authDomain: "kwitterhomeworkproject.firebaseapp.com",
    databaseURL: "https://kwitterhomeworkproject-default-rtdb.firebaseio.com",
    projectId: "kwitterhomeworkproject",
    storageBucket: "kwitterhomeworkproject.appspot.com",
    messagingSenderId: "404521181970",
    appId: "1:404521181970:web:315e58fb54a88fbdf389cb"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name =  localStorage.getItem("room_name");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like:0

          });
           document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);

      uname = message_data["name"];
      messege = message_data["message"];
      like = message_data["like"];

      name_with_tag = "<h4>"+uname + " <img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4> class='messege_h4'"+ message + "</h4>"
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLikes(this.item)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'></span>Like  "+like+"</button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;

      document.getElementById("output").innerHTML  += row;
//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

function updateLikes(messege_id){
      console.log("like button is clicked" + messege_id);
      button_id = messege_id;
      likes = document.getElementById(button_id).value;
     updated_likes = Number(likes)+1;

      firebase.database().ref(room_name).child(messege_id).update({
            like : updated_likes
      });
      console.log(updated_likes);
};
