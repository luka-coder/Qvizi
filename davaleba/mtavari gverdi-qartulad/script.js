var index = 0;
var images = [];
var time = 3000;

images[0] = "img/p_1.jpg";
images[1] = "img/p_2.jpg";
images[2] = "img/p_3.jpg";
images[3] = "img/p_4.jpg";
images[4] = "img/p_5.jpg";

function change(){
    document.slider.src = images[index]
    if(index < images.length - 1){
        index++;
    }
    else{
        index = 0;
    }
}
window.onload = change;
function prev(){
    if(index>0){
        document.slider.src = images[index-1]
        index--;
    }
    else{
        document.slider.src = images[images.length - 1]
        index = images.length - 1;
    }

}
function next(){
    if(index < images.length - 1){
        document.slider.src = images[index+1]
        index++;
    }
    else{
        document.slider.src = images[0]
        index = 0;
    }
}