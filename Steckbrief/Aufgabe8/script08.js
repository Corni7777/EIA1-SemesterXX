window.addEventListener("load", function () {
    // Array with all sounds
    var sounds = [
        new Audio("assets/kick.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("assets/hihat.mp3"),
        new Audio("assets/A.mp3"),
        new Audio("assets/C.mp3"),
        new Audio("assets/F.mp3"),
        new Audio("assets/G.mp3"),
        new Audio("assets/laugh-1.mp3"),
        new Audio("assets/laugh-2.mp3")
    ];
    // other variables    
    var myInterval;
    var index = 0;
    var playback;
    // Function to play sounds  
    function playSample(sound) {
        sound.play();
    }
    // Function to play beat
    function playBeat() {
        // start playing beat and turn into stop button
        if (document.querySelector("#playButton").getAttribute("class") == "fas fa-play-circle") {
            document.querySelector("#playButton").setAttribute("class", "fas fa-stop-circle");
            myInterval = setInterval(tone, 500);
        }
        // stop playing beat and turn into play button
        else {
            document.querySelector("#playButton").setAttribute("class", "fas fa-play-circle");
            clearInterval(myInterval);
        }
        // function to set beat 
        function tone() {
            playSample(sounds[index]);
            index++;
            if (index == 3) {
                index = 0;
            }
        }
    }
    // function to delete remix
    function deleteRemix() {
        clearInterval(myInterval);
        if (document.querySelector("#playButton").getAttribute("class") == "fas fa-stop-circle") {
            document.querySelector("#playButton").setAttribute("class", "fas fa-play-circle");
        }
    }
    // function to play remix
    function playRemix() {
        myInterval = setInterval(mix, 250);
        function mix() {
            index = Math.floor(Math.random() * 5);
            playSample(sounds[index]);
        }
        playback = true;
        if (playback == true) {
            document.querySelector("#playButton").setAttribute("class", "fas fa-stop-circle");
        }
        else {
            document.querySelector("#playButton").setAttribute("class", "fas fa-play-circle");
            clearInterval(myInterval);
        }
    }
    // Play Sounds on click
    document.querySelector("#buttonKick").addEventListener("click", function () { playSample(sounds[0]); });
    document.querySelector("#buttonSnare").addEventListener("click", function () { playSample(sounds[1]); });
    document.querySelector("#buttonHihat").addEventListener("click", function () { playSample(sounds[2]); });
    document.querySelector("#buttonA").addEventListener("click", function () { playSample(sounds[3]); });
    document.querySelector("#buttonC").addEventListener("click", function () { playSample(sounds[4]); });
    document.querySelector("#buttonF").addEventListener("click", function () { playSample(sounds[5]); });
    document.querySelector("#buttonG").addEventListener("click", function () { playSample(sounds[6]); });
    document.querySelector("#buttonLaugh1").addEventListener("click", function () { playSample(sounds[7]); });
    document.querySelector("#buttonLaugh2").addEventListener("click", function () { playSample(sounds[8]); });
    document.querySelector("#playButton").addEventListener("click", function () { playBeat(); });
    document.querySelector("#remixButton").addEventListener("click", function () { playRemix(); });
    document.querySelector("#deleteButton").addEventListener("click", function () { deleteRemix(); });
});
//# sourceMappingURL=script08.js.map