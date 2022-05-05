let navSession = document.getElementById("navSession")
let register = document.getElementById("register")
let token = localStorage.getItem("token")

if(token != null){

    navSession.innerHTML =
    `
    <li class="nav-item">
        <a class="nav-link" href="./pages/logout.html">Logout</a>
    </li>
    `
} else {
    navSession.innerHTML =
    `
    <li class="nav-item">
        <a class="nav-link" href="./pages/login.html">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="./pages/register.html">Register</a>
    </li>
    
    `
}