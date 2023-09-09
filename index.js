
 // here created a ranndom number using math.random method
 // by that we get an random image_name which we stored (dice1 to dice6)
// console.log(image);
// here we are selecting the img in the document tag "src" index 
// now we are manpulating the src tag in an image tag by the image var(the src will be replaced by image var)
// pics
// same for second image
// pics2
// now to target the images  in a folder so we are concating randomimage and the folder_name

// var player1_Score=document.querySelector(".p1_score").innerText;
// var player2_Score=document.querySelector(".p2_score").innerText;


function random_img () {
    var random=Math.floor((Math.random() *6)+1);
    var random_image="images/dice"+random+".png";
    return random_image;
}

// optaining button
let reset=document.querySelector(".play_button");
console.log(reset)
reset.addEventListener("click",restart)

function restart() {
    var randomNumber1 = random_img();
    document.querySelectorAll("img")[0].setAttribute("src",randomNumber1); 

    var randomNumber2 = random_img(); 
    document.querySelectorAll("img")[1].setAttribute("src",randomNumber2);

   if(randomNumber1 == randomNumber2){
    document.getElementById("z").innerHTML="Draw";
    }
    else  if(randomNumber1 > randomNumber2){
    document.getElementById("z").innerHTML="Player1 Won";
    // console.log(player1_Score = 1);

    }
    else{
    document.getElementById("z").innerHTML="Player2 Won";
    // player2_Score=1;
    }
}

// 3 conditions and manpulated the innerhtml by Id

