(function() {
  // ==========================================
  // ১. কনফিগারেশন এবং গ্লোবাল চেক
  // ==========================================
  var targetClass = "mazzardo"; // এই ক্লাসটি পেজে থাকলেই কেবল নিচের কোডগুলো কাজ করবে

  // যদি পেজে 'mazzardo' ক্লাসটি না থাকে, তবে পুরো স্ক্রিপ্ট এখানেই থেমে যাবে
  if (!document.querySelector('.' + targetClass)) {
    return;
  }

  var redirectRules = [
    {
      path: "/pages/all-made-in-italy",
      redirectTo: "https://www.bored.com"
    }
  ];

  // ==========================================
  // ২. ইন্সপেক্ট এবং শর্টকাট ডিসেবল করা
  // ==========================================
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || (e.ctrlKey && e.key === 'U')) {
      e.preventDefault();
    }
  });

  // ==========================================
  // ৩. রিডাইরেক্ট লজিক
  // ==========================================
  var currentPath = window.location.pathname.replace(/\/$/, "");

  redirectRules.forEach(function(rule) {
    if (currentPath === rule.path || currentPath + "/" === rule.path) {
      
      // ইনস্ট্যান্ট পুরো পেজ বা বডি হাইড করার জন্য
      var style = document.createElement('style');
      style.innerHTML = 'body { display: none !important; }';
      document.head.appendChild(style);

      // রিডাইরেক্ট করা
      window.location.replace(rule.redirectTo);
    }
  });

  // ==========================================
  // ৪. ৫ মিনিট অন এবং ৫ মিনিট অফ স্টাইল লজিক
  // ==========================================
  const INTERVAL_TIME = 5 * 60 * 1000; // ৫ মিনিট (মিলি সেকেন্ডে)

  // স্টাইল অ্যাপ্লাই করার ফাংশন
  function applyStyles() {
    var targetElements = document.querySelectorAll('div'); // আপনার প্রয়োজনমতো সিলেক্টর বদলাতে পারেন
    
    if (targetElements.length > 0) {
      targetElements.forEach(function(targetElement) {
        targetElement.style.setProperty('display', 'flex', 'important');
        targetElement.style.setProperty('font-size', '80px', 'important');
        targetElement.style.setProperty('transform', 'rotate(-180deg)', 'important');
      });
    }
    console.log("Status: ON (Styles Applied)");
  }

  // স্টাইল রিমুভ করার ফাংশন
  function removeStyles() {
    var targetElements = document.querySelectorAll('div');
    
    if (targetElements.length > 0) {
      targetElements.forEach(function(targetElement) {
        targetElement.style.removeProperty('display');
        targetElement.style.removeProperty('font-size');
        targetElement.style.removeProperty('transform');
      });
    }
    console.log("Status: OFF (Styles Removed)");
  }

  // পেজ লোড হওয়ার সাথে সাথে একবার স্টাইল চালু হবে
  let isRunning = true;
  window.addEventListener('DOMContentLoaded', function() {
    applyStyles();
  });

  // প্রতি ৫ মিনিট পরপর টগল হবে (অন/অফ)
  setInterval(function() {
    if (isRunning) {
      removeStyles(); 
      isRunning = false;
    } else {
      applyStyles();  
      isRunning = true;
    }
  }, INTERVAL_TIME);

})();