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
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome to Kwitter" + "-" + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}