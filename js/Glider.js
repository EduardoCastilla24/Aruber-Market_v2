window.addEventListener('load', function(){
  new Glider(document.querySelector('.Glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.dots',
    draggable: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
  
        }
      }
    ]
  });
});