export default function setupScrollHandler() {
       const $p = document.querySelector(".grey");
      
       window.addEventListener('scroll', function() {
          let dato = window.pageYOffset;
          if (dato >= 400) {
            $p.style.display = "inline";
          } else {
            $p.style.display = "none";
          }
       });
      }