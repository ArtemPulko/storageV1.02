

butt1.addEventListener("click", func1);
function func1()
{
   var colorDivs = document.getElementsByClassName("main");
            var r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            colorDivs[0].style.backgroundColor = color;
}

butt2.addEventListener("click", func2);
function func2()
{
	window.location.href='NextPage.html';
}





function func3()
{

 

 var x1 = 210, y1 = 0,x2 = 190,y2 = 270, speed = 1.5;
var d = document.getElementById('obj');
d.style.position = "absolute";
     
function fun(){
        var r = Math.floor(Math.random() * (256)),
            g = Math.floor(Math.random() * (256)),
            b = Math.floor(Math.random() * (256)),
       color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
       d.style.backgroundColor = color;
}


//y+1 = x-1
move();
  function move () {
    timer = setInterval(function () {

      x1 += speed;
      y1 += speed;

      x2 -= speed;
      y2 -= speed;

      

      d.style.left = x1+'px';      
      d.style.right = x2+'px';

      d.style.top = y2+'px';
      d.style.bottom = y1+'px';

      		if(y1 >= 270){

			clearInterval(timer);
      fun();
			move3();
			}

if(x1 >= 370){

	clearInterval(timer);
  fun();
	move1();
}
      


    }, 0.1)

}
//y-1 = x-1
   
     function move1() {
    timer2 = setInterval(function () {

      x1 -= speed;
      y1 += speed;

      x2 += speed;
      y2 -= speed;

      

      d.style.left = x1+'px';      
      d.style.right = x2+'px';

      d.style.top = y2+'px';
      d.style.bottom = y1+'px';

      if(x1 <= 0){
        	clearInterval(timer2);
          fun();
        	move();
        }
      if(y1 >= 270){
        clearInterval(timer2);
        fun();
        move2();
    }
     }, 0.1)

   }

// y-1 = x-1

  function move2() {
    timer3 = setInterval(function () {

      x1 -= speed;
      y1 -= speed;

      x2 += speed;
      y2 += speed;

      

      d.style.left = x1+'px';      
      d.style.right = x2+'px';

      d.style.top = y2+'px';
      d.style.bottom = y1+'px';

      if(y1 <= 0){
      	clearInterval(timer3);
        fun();
      	move1();
      }

      if(x1 <= 0){
			clearInterval(timer3);
      fun();
			move3();
      }

    }, 0.1)

}

//y-1 = x+1
  function move3() {
    timer4 =setInterval(function () {

      x1 += speed;
      y1 -= speed;

      x2 -= speed;
      y2 += speed;

      

      d.style.left = x1+'px';      
      d.style.right = x2+'px';

      d.style.top = y2+'px';
      d.style.bottom = y1+'px'; 


           	if(x1 >= 370){
      		clearInterval(timer4);
          fun();
      		move2();
      	}

      if(y1 <= 0){

		clearInterval(timer4);
    fun();
		move();
      }

    }, 0.1)

}



}
