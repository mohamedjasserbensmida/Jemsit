
    function toggleDescription(id) {
      var description = document.getElementById("description" + id);
      var titles = document.getElementsByClassName("title");

      var descriptions = document.getElementsByClassName("description");
      var arrows = document.querySelectorAll("[class^='arrow']");

      for (var i = 0; i < descriptions.length; i++) {
        if (descriptions[i] === description) {
          if (descriptions[i].style.display === "block") {
            descriptions[i].style.display = "none";
            arrows[i].style.display = "none";
            document.getElementsByClassName("arr").hidden = false;


          } else {
            descriptions[i].style.display = "block";
            arrows[i].style.display = "block";

          }
        } else {
          descriptions[i].style.display = "none";
          arrows[i].style.display = "none";
        }
      }
    }




    window.onload = function() {
      var videos = document.querySelectorAll('.video');
      var videoOffsets = [];

      videos.forEach(function(video) {
        var offsetTop = video.offsetTop;
        videoOffsets.push(offsetTop);
      });

      function checkVideoPlay() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        for (var i = 0; i < videoOffsets.length; i++) {
          var video = videos[i];
          var offsetTop = videoOffsets[i];

          if (scrollPosition >= (offsetTop - 200)) {
            video.play();
          } else {
            video.pause();
          }
        }
      }

      checkVideoPlay();

      window.addEventListener('scroll', checkVideoPlay);
    };




