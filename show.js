

async function append(data,location){

    data.forEach((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class","knowcard");
        let img = document.createElement("img");
        img.src = el.url;
        let h2 = document.createElement("h2");
        h2.textContent = el.title;
        let p = document.createElement("p");
        p.textContent = "Read more"
        p.addEventListener("click",()=>{

            localStorage.setItem("single_Data",JSON.stringify(el));
            window.location.href = "article.html"

        })
        div.append(img,h2,p);
        location.append(div);
    })

}

export default append