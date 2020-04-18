$(document).ready(function(){

   

    if(vinPopSettings){
        $("body").append(`
            <div class='vin-salespop vsp-container'>
            <div class='vsp-line vsp-meta'>
                <span class='vsp-subtitle'>
                
                </span>

                <span class='vsp-time'>
                    15 mins ago
                </span>
            </div>
            <div class='vsp-line vsp-body'>
                <div class='vsp-data'>
                    <span class='vsp-title'> 
                        <i class='name-input' > </i> just purchased the <i class='product-input' > </i>
                    </span>
                    <span class='vsp-location'>
                    </span>
                </div>
                
                <img class='vsp-img' src='https://i.pravatar.cc/60'>

            </div>
        </div>`);

        function shuffle(array, second = false ) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
    
            if(second)
                return array;
            else
                return shuffle(array, true);
        }
    
        function showPopup(){
            var { names , products , images , slideFrom, randomImages, locations , hideAfter , subtitle , hideImage , blinkSubtitle}  = vinPopSettings ;
            
            var name = shuffle(names)[0] ; 
            
            var product = products[ Math.floor(Math.random() * products.length) ] ;
            var timeAgo = Math.floor(Math.random() * 11); 
            var image = images[ Math.floor(Math.random() * images.length) ] ;
            var location = locations[ Math.floor(Math.random() * locations.length) ] ; 
    
            while(timeAgo == 0)
                timeAgo = Math.floor(Math.random() * 11); 
    
            $(".vin-salespop .name-input").text(name);
            $(".vin-salespop .product-input").text(product);
            $(".vin-salespop .vsp-subtitle").text(subtitle);
            $(".vin-salespop .vsp-location").text(location);
            $(".vsp-time").text(timeAgo+ ' mins ago');
    
            if(!image && !randomImages)
                $('.vin-salespop').addClass('no-img');
            else if(image)
                $(".vin-salespop .vsp-img").attr("src",image);


            if(blinkSubtitle)
                $(".vin-salespop .vsp-subtitle").addClass('blink');
    
            if(slideFrom)
                $(".vin-salespop").addClass("slide-" + slideFrom);
            
            
            $(".vin-salespop").addClass("active");
            setTimeout(() => {
                $(".vin-salespop").removeClass("active");
            } , hideAfter);
        }
    
        setInterval(function(){
            showPopup();
        }, vinPopSettings.interval);
    }

   


});