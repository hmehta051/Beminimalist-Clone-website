async function signup(){
    let mobnumber=Math.floor(Math.random()*1000000).toString();
    let despdetail=Math.floor(Math.random()*1000000).toString();
        let signindata={
            name:document.getElementById("first").value,
            email:document.getElementById("last").value,
            password:document.getElementById("password").value,
            username:document.getElementById("email").value,
            mobile:mobnumber,
            description:despdetail
        }
        signindata=JSON.stringify(signindata);
        console.log("sign-up-data",signindata);

        let regurl=`https://masai-api-mocker.herokuapp.com/auth/register`;

        let res=await fetch(regurl,{
            method: "POST",
            body:signindata,
            headers:{
                "Content-Type":"application/json",
            },
        });

        let data=await res.json();
        console.log("data is",data);
        if(data.error==false){
            window.location.href="login.html";
        }
        else if(data.error==true){
            let newdiv=document.getElementById("popup");
            newdiv.style.display="inline-block";
        }
        
    }
