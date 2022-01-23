

async function append(data,location){

    data.forEach((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class","knowcard");
        div.setAttribute('data-aos','zoom-in-up');
        let img = document.createElement("img");
        img.src = el.url;
        let h2 = document.createElement("h2");
        h2.textContent = el.title;
        let p = document.createElement("p");
        p.textContent = "Read more"
        p.addEventListener("click",()=>{
<<<<<<< HEAD

            localStorage.setItem("single_Data",JSON.stringify(el));
            window.location.href = ""
=======
            console.log(el.id);
            window.location.href = `/knowledge/${el.id}`
>>>>>>> 5fee6cc4edf5aa88a6c1a1f1fa001712e59718fd

        })
        div.append(img,h2,p);
        location.append(div);
    })

}

export default append