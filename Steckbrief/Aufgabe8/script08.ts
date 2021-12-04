window.addEventListener("load", function(): void {

    // Array with all sounds

    var sounds: HTMLAudioElement [] = [
        new Audio("assets/kick.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("assets/hihat.mp3"),
        new Audio("assets/A.mp3"),
        new Audio("assets/C.mp3"),
        new Audio("assets/F.mp3"),
        new Audio("assets/G.mp3"),
        new Audio("assets/laugh-1.mp3"),
        new Audio("assets/laugh-2.mp3")]; 
    // other variables    
    var myInterval: number;
    var index: number = 0;
    var playback: boolean;          
     
    // Function to play sounds  

    function playSample(sound: HTMLAudioElement): void {
        sound.play();
    }
    // Function to play beat
    
    function playBeat (): void {
        
        // start playing beat and turn into stop button
        if (document.querySelector("#playButton").getAttribute("class") == "fas fa-play-circle") {
            document.querySelector("#playButton").setAttribute("class", "fas fa-stop-circle");
            myInterval = setInterval(tone, 500);
            }
        // stop playing beat and turn into play button
        else {document.querySelector("#playButton").setAttribute("class", "fas fa-play-circle");
              clearInterval(myInterval); }
        // function to set beat 
        function tone(): void {
            playSample(sounds[index]);
            index++;
            if (index == 3) { index = 0; } 
        }
    }
    // function to delete remix
    function deleteRemix(): void {
        clearInterval(myInterval);
        if (document.querySelector("#playButton").getAttribute("class") == "fas fa-stop-circle") {
            document.querySelector("#playButton").setAttribute("class", "fas fa-play-circle"); }
        }
 
    // function to play remix
    function playRemix(): void {
        myInterval = setInterval(mix, 250);
        function mix(): void {
            index = Math.floor(Math.random() * 5);
            playSample(sounds[index]);    
        }
        playback = true;
        if (playback == true) {document.querySelector("#playButton").setAttribute("class", "fas fa-stop-circle"); }
        else {document.querySelector("#playButton").setAttribute("class", "fas fa-play-circle");
              clearInterval(myInterval); } }

    // Play Sounds on click
    document.querySelector("#buttonKick").addEventListener("click", function (): void {playSample(sounds[0]); });
    document.querySelector("#buttonSnare").addEventListener("click", function (): void {playSample(sounds[1]); });
    document.querySelector("#buttonHihat").addEventListener("click", function (): void {playSample(sounds[2]); });
    document.querySelector("#buttonA").addEventListener("click", function (): void {playSample(sounds[3]); });
    document.querySelector("#buttonC").addEventListener("click", function (): void {playSample(sounds[4]); });
    document.querySelector("#buttonF").addEventListener("click", function (): void {playSample(sounds[5]); });
    document.querySelector("#buttonG").addEventListener("click", function (): void {playSample(sounds[6]); });
    document.querySelector("#buttonLaugh1").addEventListener("click", function (): void {playSample(sounds[7]); });
    document.querySelector("#buttonLaugh2").addEventListener("click", function (): void {playSample(sounds[8]); });

       
    document.querySelector("#playButton").addEventListener("click", function(): void {playBeat(); });
    document.querySelector("#remixButton").addEventListener("click", function(): void {playRemix(); });
    document.querySelector("#deleteButton").addEventListener("click", function(): void {deleteRemix(); });
   
});