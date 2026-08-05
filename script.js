// (function() {
//   // ==========================================
//   // CONFIGURATION VARIABLES (এখানে আপনার প্রয়োজনমতো পরিবর্তন করুন)
//   // ==========================================
//   var config = {
//     targetClass: "mazzardo",                                    // ১. কন্ট্রোল করার ক্লাস নেম
//     allowedDomains: ["polospetcloset.myshopify.com", "polospetcloset.com"], // ২. টার্গেট ডোমেইনসমূহ
//     targetPath: "/pages/gallery",                               // ৩. টার্গেট পেজের পাথ
//     redirectUrl: "https://polospetcloset.myshopify.com/pages/gallery123", // ৪. রিডাইরেক্ট করার ইউআরএল
//     devToolsThreshold: 160,                                     // ৫. ডিভাইস টুলস ডিটেকশন পিক্সেল সাইজ
    
//     // ৬. স্টাইল এবং ফন্ট সাইজ কনফিগারেশন (আপনার শেষ কোডের অংশ)
//     targetElementSelector: '.section-spacing.color-scheme.color-scheme--scheme-1.color-scheme--bg-622e9d022fe709b9009d21097c1b9701 .section-stack',
//     customStyles: {
//       display: 'flex',
//       fontSize: '80px',
//       transform: 'rotate(-180deg)'
//     }
//   };

//   // ==========================================
//   // CONDITIONAL CHECK (ক্লাস চেক করা)
//   // ==========================================
//   var hasTargetClass = document.querySelector('.' + config.targetClass) !== null;
//   if (!hasTargetClass) {
//     return; // ক্লাস না থাকলে কোড আর সামনে এগোবে না
//   }

//   // ==========================================
//   // SCRIPT EXECUTION
//   // ==========================================

//   // ১. রাইট-ক্লিক এবং শর্টকাট ডিসেবল করা
//   document.addEventListener('contextmenu', event => event.preventDefault());

//   document.addEventListener('keydown', function(e) {
//     if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (e.ctrlKey && e.key === 'U')) {
//       e.preventDefault();
//       alert('This action is disabled on this site.');
//     }
//   });

//   // ২. সিম্পল DevTools ডিটেকশন
//   (function(){
//     var check = function(){
//       if (window.outerWidth - window.innerWidth > config.devToolsThreshold || window.outerHeight - window.innerHeight > config.devToolsThreshold) {
//         console.warn('DevTools detected (soft).');
//       }
//     };
//     setInterval(check, 1000);
//   })();

//   // ডোমেইন এবং পাথ ম্যাচিং ফাংশন
//   function checkStoreAndPath() {
//     var currentHost = window.location.hostname;
//     var isTargetStore = config.allowedDomains.some(domain => currentHost.includes(domain));
//     var isTargetPage = window.location.pathname.replace(/\/$/, "") === config.targetPath;
//     return { isTargetStore, isTargetPage };
//   }

//   // ৩. গ্যালারি কন্টেন্ট হাইড করার লজিক
//   function hideGalleryContent() {
//     var match = checkStoreAndPath();
//     if (match.isTargetStore && match.isTargetPage) {
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

//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", hideGalleryContent);
//   } else {
//     hideGalleryContent();
//   }

//   // ৪. রিডাইরেক্ট লজিক
//   (function() {
//     var match = checkStoreAndPath();
//     if (match.isTargetStore && match.isTargetPage) {
//       if (document.documentElement) {
//         document.documentElement.style.display = 'none';
//       }
//       window.location.replace(config.redirectUrl);
//     }
//   })();

//   // ৫. স্পেশাল এলিমেন্ট স্টাইলিং ও ফন্ট সাইজ অ্যাপ্লাই (আপনার শেষ কোড থেকে যুক্ত)
//   function applyCustomStyles() {
//     var element = document.querySelector(config.targetElementSelector);
//     if (element) {
//       element.style.setProperty('display', config.customStyles.display);
//       element.style.setProperty('font-size', config.customStyles.fontSize, 'important');
//       element.style.setProperty('transform', config.customStyles.transform);
//     }
//   }

//   if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", applyCustomStyles);
//   } else {
//     applyCustomStyles();
//   }

// })();