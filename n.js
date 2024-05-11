
document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
  
    let username=event.target.username.value;
    let email=event.target.email.value;
    let phone=event.target.phone.value;
    console.log(email,username,phone);
    // localStorage.setItem(username, JSON.stringify({email: email, phones: phone}));
    localStorage.setItem(username,JSON.stringify({email:email,phone:phone}))


  })