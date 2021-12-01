window.addEventListener("load",function(){

    // Array with all sounds

    var sounds:HTMLAudioElement []= [
        new Audio("assets/kick.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("assets/hihat.mp3"),
        new Audio("assets/A.mp3"),
        new Audio("assets/C.mp3"),
        new Audio("assets/F.mp3"),
        new Audio("assets/G.mp3"),
        new Audio("assets/laugh-1.mp3"),
        new Audio("assets/laugh-2.mp3")]
    
    // Function to play sounds  

    function playSample(sound){
        sound.play()
    }

    // Array for beat
    var beatsounds:HTMLAudioElement[]=[
        new Audio("assets/kick.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("assets/hihat.mp3"),] 
    

    // Function to play beat
   function playBeat(){
   setInterval(function(){
       
       for (let counter = 0; counter < beatsounds.length; counter++) 
       {beatsounds[counter].play();}

   }, 500);}
    // Play Sounds on click

    document.querySelector("#buttonKick").addEventListener("click", function(){playSample(sounds[0])});
    document.querySelector("#buttonSnare").addEventListener("click", function(){playSample(sounds[1])});
    document.querySelector("#buttonHihat").addEventListener("click", function(){playSample(sounds[2])});
    document.querySelector("#buttonA").addEventListener("click", function(){playSample(sounds[3])});
    document.querySelector("#buttonC").addEventListener("click", function(){playSample(sounds[4])});
    document.querySelector("#buttonF").addEventListener("click", function(){playSample(sounds[5])});
    document.querySelector("#buttonG").addEventListener("click", function(){playSample(sounds[6])});
    document.querySelector("#buttonLaugh1").addEventListener("click", function(){playSample(sounds[7])});
    document.querySelector("#buttonLaugh2").addEventListener("click", function(){playSample(sounds[8])});

    document.querySelector("#playbutton").addEventListener("click", function(){playBeat()});
   


    })