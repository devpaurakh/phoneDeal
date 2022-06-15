var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg', '6.jpg'];
        var x = 0;

        function right(){
            if( x < 5){
                x = x + 1;
                document.getElementById('photos').innerHTML = '<img src = "./javascript/' + images[x] + '">' ;
                
            }else{
                x = 0;
                document.getElementById('photos').innerHTML = '<img src = "./javascript/' + images[x] + '">' ;
            }
        }

        function left(){
            if(x > 0){
                x = x - 1;
                document.getElementById('photos').innerHTML = '<img src = "./javascript/' + images[x] + '">' ;

            }else{
                x = 5;
                document.getElementById('photos').innerHTML = '<img src = "./javascript/' + images[x] + '">' ;
            }
        }

        // auto slider

        var imgs = document.getElementById('photos');
        setInterval(slider, 3000);
    
        function slider() {
    
          if (x < images.length) 
            {
            x = x + 1;
            } 
    
          else 
            {
            x = 1;
            }
          imgs.innerHTML = '<img src = "./javascript/' + images[x - 1] + '">';
        }
    
        

        

        
       