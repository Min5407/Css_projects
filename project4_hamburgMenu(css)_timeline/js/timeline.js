
const items = document.querySelectorAll('#timeline li');

//isinvieport is used to check if it is in the viewport
const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

window.addEventListener('scroll',function(){
   // down code means if we scroll down more than 150
   if(window.scrollY >= 200){
      $(".hamburger" ).css("background-color","#425b84");
   } else{
      $(".hamburger" ).css("background-color","#5b7bb4");
   }

});

// $(document).scroll( function() {
//    var scrollTop = $(this).scrollTop() + 40; // 40px - Fixed nav height
//    var closestElement = $(this).find('#timeline').filter( function() {
//        return $(this).offset().top > scrollTop;      
//    }).first();

//    if( closestElement.hasClass('white'))
//        $('#fixed').removeClass('black').addClass('white');
//    else
//        $('#fixed').removeClass('white').addClass('black');
// });