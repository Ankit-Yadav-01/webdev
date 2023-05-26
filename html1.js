
const details = async() => {
    const response = await fetch('https://www.coursehubiitg.in/api/codingweek/contributions');
    data = await response.json();
    console.log(data.length);
    var i,j;
    for (i = 1; i < data.length; i++)
    {
        key = data[i].points;
        var d=data[i];
        j = i - 1;
        while (j >= 0 && data[j].points < key)
        {
            data[j + 1] = data[j];
            j = j - 1;
        }
        data[j + 1] = d;
    }
/*had to create rectrangle boxes as number of elements in api file were getting changed*/
  
    document.getElementsByClassName("circle2")[0].src = data[0].avatar;
    document.getElementById("rank1").innerHTML=data[0].name+" - "+data[0].points;
    document.getElementsByClassName("circle")[0].src = data[1].avatar;
    document.getElementsByClassName("rank23")[0].innerHTML= data[1].name+" - "+data[1].points;
    document.getElementsByClassName("circle")[1].src = data[2].avatar;
    document.getElementsByClassName("rank23")[1].innerHTML= data[2].name+" - "+data[2].points;
    for(let k=3;k<data.length;k++){
        var re=document.createElement("div");
        var rnk=document.createElement("span");
        var imag=document.createElement("span");
        var image1=document.createElement("img");
        image1.setAttribute("class","dot7");
        imag.appendChild(image1)
        var name=document.createElement("span");
        var point=document.createElement("span");
        re.setAttribute("class","rect4");
        rnk.setAttribute("class","rank2");
        image1.setAttribute("class","dot7");
        name.setAttribute("class","name");
        point.setAttribute("class","points")
        var rec=document.getElementsByClassName("back")[0].appendChild(re);
        rec.appendChild(rnk);
        rec.appendChild(imag);
        rec.appendChild(name);
        rec.appendChild(point);
        document.getElementsByClassName("dot7")[k-3].src = data[k].avatar;
        console.log(document.getElementsByClassName("dot7"));
        document.getElementsByClassName("rank2")[k-3].innerHTML= k+1;
        document.getElementsByClassName("points")[k-3].innerHTML= data[k].points;
        document.getElementsByClassName("name")[k-3].innerHTML=data[k].name;
    }


}

details();

