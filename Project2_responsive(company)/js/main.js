//Initialize and add the map

function initMap(){
   //your location
   const loc = { lat: -27.469770, lng: 153.025131};
   //centered map on location
   const map = new google.maps.Map(document.querySelector('.map'),{
      zoom:14,
      center: loc
   });

   //The marker, positioned at location
   const marker = new google.maps.Marker({position: loc, map: map});
}

// sticky menu opacity when scrolled 
window.addEventListener('scroll',function(){
   // down code means if we scroll down more than 150
   if(window.scrollY > 150){
      document.querySelector('#navbar').style.opacity = 0.9;
   } else{
      document.querySelector('#navbar').style.opacity =1;
   }

});




//Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
   if(this.hash !==''){
      event.preventDefault();

      const hash = this.hash;

      $('html,body').animate(
         {
            scrollTop: $(hash).offset().top-100
            // this 100 is the location after the scroll. 스크롤한 위치 (minus number shows the higher part of the body)
         },
         // speed of scrolling in milisecond
         // higher the speed meaning slower the scrolling.
         800
      );

   }
});