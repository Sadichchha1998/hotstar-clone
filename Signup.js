function User(n, e, p, u, m, d) {
    this.name = n;
    this.email = e;
    this.password = p;
    this.username = u;
    this.mobile = m;
    this.description = d;
  }

  
  var name1=document.getElementById("btn")
  name1.addEventListener("click",function (){
    register()
  })
  async function register() {
    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const username = document.getElementById("username").value;

    const mobile = document.getElementById("mobile").value;

    const description = document.getElementById("description").value;

    //control + d to change both at one time

    let Detail = new User(name, email, password, username, mobile, description);

    let Register_Detail = await fetch(
      `https://masai-api-mocker.herokuapp.com/auth/register`,
      {
        method: "POST",

        body: JSON.stringify(Detail),

        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let Convert = await Register_Detail.json();

    let msg = Convert.message;

    if ((msg = "Registration Success")) {
      alert(msg);
      window.location.href = "login.html";
    } else {
      alert("Please try again");
      window.location.reload();
    }
  }

  
import navbar from './components/navbar.js'

document.getElementById("navbar").innerHTML = navbar()