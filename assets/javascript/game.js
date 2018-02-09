var total = 0
var crystalArr = ["assets/images/azul.png", "assets/images/diamond.png", "assets/images/ruby.png", "assets/images/obsidian.png"]
    var randNum = Math.floor( Math.random() * 100 )
    // $( "#" ).text( "Click the Crystals to Match the Number : " + randNum )
    
    for ( var i = 0 ; i < crystalArr.length; i++ ) {
      var myImage = $("<img src='"+crystalArr[i]+"' class='mycrystals crystal-"+i+"'>")
      myImage.attr("data-crystalValue", Math.floor( Math.random() * 20 ) )
    //   console.log("Hi")
      $(".gems-col").append(myImage)
    
    }

    $(".mycrystals").on("click", function() {
      var crystalNum = parseInt($(this).attr("data-crystalValue"))
      console.log("click")
      total += crystalNum
      $("#myNum").text(total)
      if(total === randNum) {
        alert("You Win!")
      }
      else if(total > randNum) {
        alert("You Lose!")
      }
      else {
        return
      }
    })