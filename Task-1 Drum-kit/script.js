let keyvalues = [];
for(let values=0;values<=9;values++){
    keyvalues [values]= document.querySelectorAll(".key")[values].getAttribute('data-key');
}

let sound_values = [];
for(let s_values=0;s_values<=9;s_values++){
    sound_values [s_values]= document.querySelectorAll("audio")[s_values].getAttribute('data-key');
}

let box = document.getElementsByClassName("box");
// function style(){
// for(var i=0;i<box.length;i++){
    
//     box[i].style.borderColor="yellow";
//   }
// }



let counter = 0;

let sound;


window.addEventListener('keydown',(e)=>{
    let counter=0;
    for(counter;counter<=9;counter++){
        if(keyvalues[counter]==e.keyCode){
        console.log(sound = document.getElementsByClassName("audios")[counter].play());
        sound.currentTime=0;
        function styleset(){
             box[counter].style.borderColor="yellow";
        }
        let mytimeout = setTimeout(styleset(),1000);
    } 
    
}})
