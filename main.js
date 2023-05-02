// console.log('adfa');

// mapboxgl.accessToken = 'pk.eyJ1IjoiZmVlZGxpZ2h0NDIiLCJhIjoiY2xnY3d5eW92MTF3bzNjcWxvbm83enk4YyJ9.y2k3VZCUGo5cvYNEfDp7pA';
// var map = new mapboxgl.Map({
//           container: 'map',
//           style: 'mapbox://styles/feedlight42/clgqmxs0k00l501qxe6l42i05'
//         });



//  magnetic button



const btns = document.querySelectorAll(".btn");
    
        btns.forEach((btn) => {
          btn.addEventListener("mousemove", function(e){
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
    
            btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
          });
        });
    
        btns.forEach((btn) => {
          btn.addEventListener("mouseout", function(e){
            btn.children[0].style.transform = "translate(0px, 0px)";
          });
        });


// end of mag button