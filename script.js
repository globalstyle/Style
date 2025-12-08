//  document.addEventListener('contextmenu', event => event.preventDefault());

//   document.onkeydown = function(e) {
//     // F12
//     if (e.keyCode == 123) {
//       return false;
//     }
//     // Ctrl+Shift+I/J/C
//     if (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74 || e.keyCode == 67)) {
//       return false;
//     }
//     // Ctrl+U
//     if (e.ctrlKey && e.keyCode == 85) {
//       return false;
//     }
//   }


// // Disable right click
//   document.addEventListener('contextmenu', e => e.preventDefault());

//   // Block common devtools shortcuts
//   document.addEventListener('keydown', function(e) {
//     if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || (e.ctrlKey && e.key === 'U')) {
//       e.preventDefault();
//       // optional: show a message
//       alert('This action is disabled on this site.');
//     }
//   });

//   // Very simple DevTools detection (timing / size based) — easy to bypass
//   (function(){
//     var threshold = 160;
//     var check = function(){
//       if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
//         // probable devtools open — take a soft action
//         console.warn('DevTools detected (soft).');
//         // e.g., show overlay (but don't block critical functionality)
//         // document.body.innerHTML = '<h1>Access Restricted</h1>';
//       }
//     };
//     setInterval(check, 1000);
//   })();
