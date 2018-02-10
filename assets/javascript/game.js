$(document).ready( function() {

  var total = 0
  $("#score").text("You have: " + total)

  var wins = 0
  var loss = 0
  var crystalArr = ["assets/images/azul.png", "assets/images/diamond.png", "assets/images/ruby.png", "assets/images/obsidian.png"]
      var randNum = Math.floor( Math.random() * 100 )
      $( "#num-gems" ).text( "Try to match : " + randNum )
      
      for ( var i = 0 ; i < crystalArr.length; i++ ) {
        var myImage = $("<img src='"+crystalArr[i]+"' class='mycrystals crystal-"+i+"'>")
        myImage.attr("data-crystalValue", Math.floor( Math.random() * 20 ) )
      //   console.log("Hi")
        $(".gems-col").append(myImage)
      
      }
  
      $(".mycrystals").on("click", function() {
        var crystalNum = parseInt($(this).attr("data-crystalValue"))
        console.log(crystalNum)
        total += crystalNum
        $("#score").text("You have: " + total)
        if(total === randNum) {
          // alert("You Win!")
          wins++
          $("#wins").text("Wins: " + wins)
        }
        else if(total > randNum) {
          alert("You Lose!")
          loss++
          $("#loss").text("Losses: " + loss)
        }
        else {
          return
        }
      })

      //sets the current score to zero and generates a new random number
  
        $(".resetRound").on("click", function () {
          randNum = Math.floor(Math.random() * 100)
          $( "#num-gems" ).text( "Try to match : " + randNum )
          total = 0 
          $("#score").text("You have: " + total)
          console.log("resetRound")
        })
  
        //sets the current score to zero and generates a new random number, resets win and loss count
  
        $(".resetGame").on("click", function () {
          randNum = Math.floor(Math.random() * 100)
          $( "#num-gems" ).text( "Try to match : " + randNum )
          total = 0 
          $("#score").text("You have : " + total)
          wins = 0
          $("#wins").text("Wins: " + wins)
          loss = 0
          $("#loss").text("Losses: " + loss)
          console.log("resetGame")
        })
  

}) 
