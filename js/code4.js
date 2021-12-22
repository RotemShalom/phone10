/*===================================
            preloader
===================================*/
$(window).on('load' , function(){ //makes sure that whole site is loaded
    
   $('#status').fadeOut(); 
   $('#preloader').delay(350).fadeOut('slow'); 
    
});


/*===================================
                הרחבות
===================================*/
var nSlide = 0;


$(function(){
   new WOW().init();
   
    sessionStorage.setItem("slideNum", nSlide);
    
    for(var i = 1; i<=5; i++)
    {
        $(".section" + i).hide();
    }
    
    $(".next-btn-scroll").on("click", nextSlide);
    $(".back-btn0-scroll").on("click", prevSlide); 
});


function nextSlide() {
    console.log("in next quest");
    console.log('slide: ' + nSlide);
    $(".section" + nSlide).hide();
    $(".next-btn-scroll").addClass("hide");
   /* if(Number(sessionStorage.getItem("slideNum", nSlide)) == 0)
    {
       $(".back-btn").show();
       $(".back-btn").on("click", prevSlide); 
    }
    else
    {
        $(".section0").hide();
    }*/
    
    nSlide++;
    sessionStorage.setItem("slideNum", nSlide);
    
     //$(".next-btn").off("click", nextSlide);
    
    if(Number(sessionStorage.getItem("slideNum", nSlide)) == 6)
    {
        //$(".next-btn").off("click", nextSlide);
        window.location.href = "index5.html";
    }
    else
    {
         showSlide();
    }
   
}

function prevSlide() {
    
   if(Number(sessionStorage.getItem("slideNum", nSlide)) == 0)
   {
      window.location.href = "index3.html";
   }
   else if(Number(sessionStorage.getItem("slideNum", nSlide)) == 1)
   {
       showData();
   }
   else
   {
       $(".section" + nSlide).hide();
       nSlide--;
       sessionStorage.setItem("slideNum", nSlide);
       showSlide();  
   }
   
}

function showSlide() {
    
    console.log("in show slide");
      $(".correctAns").on("click", showCorrect);   
      $(".wrongAns").on("click", showWrong);
      $(".wrongAns").removeClass("wrong");
      $(".correctAns").removeClass("correct");
      $(".FBwrong").addClass("hide");
      $(".FBcorrect").addClass("hide");

    
   console.log("nSlide: " + Number(sessionStorage.getItem("slideNum", nSlide)));
    $(".section" + Number(sessionStorage.getItem("slideNum", nSlide))).show(); 
}

function showCorrect()
{
   $(".correctAns").addClass("correct");
   $(".FBcorrect").removeClass("hide");
   
   $(".correctAns").off("click", showCorrect);   
    $(".wrongAns").off("click", showWrong);
    
   /*if(Number(sessionStorage.getItem("slideNum", nSlide)) == 1)
    {
        $(".insruction").addClass("hide");
    }*/
    
    
  /*  if(Number(sessionStorage.getItem("slideNum", nSlide)) == 5)
    {
        //$(".next-btn").off("click", nextSlide);
        window.replace("index5.html");
    }*/
    $(".next-btn-scroll").removeClass("hide");
     //$(".next-btn").on("click", nextSlide);
}

function showWrong()
{
   $(".wrongAns").addClass("wrong");
   $(".FBwrong").removeClass("hide");
   
    $(".correctAns").off("click", showCorrect);   
    $(".wrongAns").off("click", showWrong);
    
   /*if(Number(sessionStorage.getItem("slideNum", nSlide)) == 1)
    {
        $(".insruction").addClass("hide");
    }
    
  if(Number(sessionStorage.getItem("slideNum", nSlide)) == 5)
    {
        $(".next-btn").off("click", nextSlide);
    }*/
    
    $(".next-btn-scroll").removeClass("hide");
     //$(".next-btn").on("click", nextSlide);
}

/*function startQuestions()
{
    //alert("in start questions")
   
    $(".section0").hide();
   
    
    $("next-btn-scroll").hide();
    $("back-btn0-scroll").hide();
    
    $(".section" + 1).show();
    nSlide = 1;
    sessionStorage.setItem("slideNum", nSlide);
    $(".back-btn").on("click", prevSlide);
    $(".next-btn").on("click", nextSlide);
    $(".correctAns").on("click", showCorrect);   
    $(".wrongAns").on("click", showWrong);
}*/

function showData()
{
    console.log('in show data');
    nSlide = 0;
    sessionStorage.setItem("slideNum", nSlide);
    
    for(var i = 1; i<=5; i++)
    {
        $(".section" + i).hide();
    }
    
   
    $(".section0").show();
    $(".next-btn-scroll").removeClass("hide");
    
    //$(".next-btn-scroll").on("click", startQuestions); 
}
