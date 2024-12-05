window.onload = function () {
    var username = localStorage.getItem('sessionUsername')
    if (username) {
        document.getElementById('username').innerHTML = "Welcome " +"<br>"+ username;
    }
};
