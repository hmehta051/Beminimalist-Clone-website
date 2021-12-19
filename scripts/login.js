async function login(){
    let loginData={
        username:document.getElementById("loguser").value,
        password:document.getElementById("logpass").value
    }
    loginData=JSON.stringify(loginData);
    console.log("login-data",loginData);

    let loginurl=`https://masai-api-mocker.herokuapp.com/auth/login`;

    let res=await fetch(loginurl,{
        method: "POST",
        body:loginData,
        headers:{
            "Content-Type":"application/json",
        },
    });

    let data=await res.json();
    console.log("data is",data);

    if(data.error==true){
        let newdiv=document.getElementById("popup");
        newdiv.style.display="inline-block";
    }

     let username=document.getElementById("loguser").value;
     getprofile(username,data.token);
    
}
async function getprofile(username,token){
    let api=`https://masai-api-mocker.herokuapp.com/user/${username}`;
    let res=await fetch(api,{
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    let data=await res.json();
    console.log("data",data);
    if(data.username==undefined){
        console.log("error");
    }
    else{
        window.location.href="home.html";
    }
}
let createbottom=document.getElementById("createbtn");
createbottom.addEventListener("click",function(){
    window.location.href="signup.html";
})