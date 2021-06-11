let giventext = document.querySelector("#text");
let text = null;
let data = {
    consonants: 0,
    vowels: 0,
    words: 0,
    spaces: 0,
    digits:0,
    uppercase: 0,
    lowercase: 0,
    sentences: 0,
};
const findlen = (item)=>( item==null ? 0 : item.length);
const find = ()=>{
    text = giventext.value;
    if(text!= null){
        data.consonants=findlen(text.match(/[bcdfghjklmnpqrstvwxyz]/gi ));
        data.vowels=findlen(text.match(/[aeiou]/gi ));
        data.words=findlen(text.match(/[a-zA-Z]+/g ));
        data.spaces=findlen(text.match(/\s/g ));
        data.digits=findlen(text.match(/\d/g ));
        data.uppercase=findlen(text.match(/[A-Z]/g ));
        data.lowercase=findlen(text.match(/[a-z]/g ));
        data.sentences=findlen(text.match(/\056/g ));
    }
    localStorage.setItem("data" ,JSON.stringify(data));
    window.location="info.html";   
}
const getdata =()=>{
    return JSON.parse(localStorage.getItem("data"))
}
const showdata =()=>{
    let data =getdata();
    let i = 0
    for (item in data){
        let sel = document.querySelectorAll("#box>h2");
        sel[i].innerHTML=data[item]
        i=i+1
    }

    
}



