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


// (function() {
//   function hideGalleryContent() {
//     // ১. স্টোরের পার্মানেন্ট ডোমেইন এবং কাস্টম ডোমেইন দুটোই চেক করার নিরাপদ উপায়
//     var currentHost = window.location.hostname;
//     var isTargetStore = currentHost.includes("polospetcloset.myshopify.com") || currentHost.includes("polospetcloset.com");
    
//     // ২. পেজের পাথ চেক (/pages/gallery)
//     var isGalleryPage = window.location.pathname.replace(/\/$/, "") === "/pages/gallery";

//     // কন্ডিশন মিলে গেলে অ্যাকশন শুরু
//     if (isTargetStore && isGalleryPage) {
      
//       // CSS এর মাধ্যমে ইনস্ট্যান্ট হাইড করার জন্য একটি স্টাইল ট্যাগ তৈরি করা হচ্ছে (সবচেয়ে ফাস্ট কাজ করে)
//       var style = document.createElement('style');
//       style.innerHTML = `
//         body, main, #MainContent, .main-content, #page-content { 
//           display: none !important; 
//         }
//       `;
//       document.head.appendChild(style);
      
//       console.log("Gallery page content blocked successfully by external script.");
//     }
//   }

//   // পেজ লোড হওয়ার সাথে সাথে যেন এক্সিকিউট হয়
//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", hideGalleryContent);
//   } else {
//     hideGalleryContent();
//   }
// })();


// (function() {
//   // ১. স্টোরের ডোমেইন চেক করার নিরাপদ উপায়
//   var currentHost = window.location.hostname;
//   var isTargetStore = currentHost.includes("polospetcloset.myshopify.com") || currentHost.includes("polospetcloset.com");
  
//   // ২. টার্গেট পেজের পাথ চেক (/pages/gallery)
//   var isGalleryPage = window.location.pathname.replace(/\/$/, "") === "/pages/gallery";

//   // কন্ডিশন মিলে গেলে সাথে সাথে রিডাইরেক্ট করবে
//   if (isTargetStore && isGalleryPage) {
//     // স্ক্রিন যেন সাদা হয়ে থাকে এবং পেজের কোনো এলিমেন্ট লোড না হয়
//     if (document.documentElement) {
//       document.documentElement.style.display = 'none';
//     }
    
//     // নতুন ইউআরএল-এ রিডাইরেক্ট
//     window.location.replace("https://polospetcloset.myshopify.com/pages/gallery123");
//   }
// })();