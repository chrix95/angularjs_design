(function (){

  var app = angular.module('myApp', []);

  app.controller('MainCtrl', ['$scope', function($scope) {

    $scope.restart = function () {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      $('#imageUploadBtn').css("display", "none");
      $('#clock').css('background-image', 'url()');
      $("#upload").show();
    }

    // $scope.name = "OKOKON, Christopher Ntuk";
    // $scope.position = "C.E.O";
    // $scope.phone = "08183780409; 09086316239";
    // $scope.email = "engchris95@gmail.com";
    // $scope.website = "www.steemit.com/chri5h";

    $scope.draw = function draw () {

      var x = $("#imageP").attr('src');
      //Draw canvas
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext("2d");
      // Create Objects
      var imageObj = new Image();
      var imageObj_01 = new Image();
      var imageObj_02 = new Image();
      // Declare objects sources
      imageObj.src = 'assets/img/patterns/template.png';
      imageObj_01.src = x;
      imageObj_02.src = 'assets/img/patterns/Logomask.png';
      // Specify Width and height of each object
      var width = 555.753;
      var height = 344.471;
      var width1 = 133;
      var width2 = 57;
      var height1 = 130.6;
      var height2 = 49;
      // Draw the image objects into the canvas
      imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0, width, height);
        context.drawImage(imageObj_01, 339.5, 82, width1, height1);
        context.drawImage(imageObj_02, 373, 195, width2, height2);
      }

      $("#upload").hide();
      $("#details").show();

    };

    $scope.submitWriteUp = function (name, position, phone, email, website) {

      var canvas = document.getElementById('myCanvas');

      var context = canvas.getContext("2d");

      var middle = canvas.width/2;

      context.font = "19px ExoRegular";
      context.fillStyle = "#fff";
      context.textAlign = "center";
      context.fillText(name, middle+130, 40);
      // Other  writeups drawn with different style
      context.font = "17px ExoRegular";
      context.fillText(position, middle+130, 60);
      context.font = "12px ExoRegular";
      context.fillText(phone, middle+150, 264);
      context.fillText(email, middle+139, 288);
      context.fillText(website, middle+142, 313);

      var img = new Image();

      img.src = canvas.toDataURL();

      var src = canvas.toDataURL();

      var image = '<img src="'+src+'" class="img img-responsive"/>';

      $('#download').attr('href', src);

      $('#finalPreview').prepend(image);

      $("#final").show();
      $("#details").hide();

    };

    $scope.submitWriteUp();
    $("#final").hide();

  }]);


}());
