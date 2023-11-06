{function loadVideo1() {
    var videoEl = document.getElementsByTagName('video')[0];
    var sourceEl = videoEl.getElementsByTagName('source')[0];
    sourceEl.src = 'video1.mp4';
    videoEl.load();
   }
   
   function loadVideo2() {
    var videoEl = document.getElementsByTagName('video')[0];
    var sourceEl = videoEl.getElementsByTagName('source')[0];
    sourceEl.src = 'video2.mp4';
    videoEl.load();
   } }
   function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }