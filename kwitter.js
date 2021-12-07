function login(){
    user_name = document.getElementById("name_input").Value;

    localStorage.setItem("name_input", user_name);

    window.location = "kwitter_room.html";
}