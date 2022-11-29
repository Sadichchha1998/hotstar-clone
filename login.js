
 var name1=document.getElementById("btn")
  name1.addEventListener("click",function (){
    login()
  })

async function login() {
  event.preventDefault();

  let User = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  //console.log(User);

  let URL = `https://masai-api-mocker.herokuapp.com/auth/login`;

  let Checker = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(User),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let Verify = await Checker.json();

  let err = Verify.error;

  if (err == false) {
    window.location.href = "index.html";
  } else {
    alert("Please use right credential");
    window.location.reload();
  }
}

import navbar from './components/navbar.js'

document.getElementById("navbar").innerHTML = navbar()