(function() {
  // ==========================================
  // ১. কনফিগারেশন ভেরিয়েবল
  // ==========================================
  var targetClass = "mazzardo"; // এই ক্লাসটি পেজে থাকতে হবে

  var redirectRules = [
    {
      path: "/pages/all-made-in-italy",
      redirectTo: "https://www.bored.com"
    }
  ];

  // ==========================================
  // ২. ক্লাস চেক লজিক
  // ==========================================
  if (!document.querySelector('.' + targetClass)) {
    return;
  }

  // ==========================================
  // ৩. ইন্সপেক্ট এবং শর্টকাট ডিসেবল করা
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
  // ৪. রিডাইরেক্ট এবং স্টাইল লজিক
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
  // ৫. স্পেশাল এলিমেন্ট স্টাইল (সব div-এ একসঙ্গে এপ্লাই করার জন্য)
  // ==========================================
  window.addEventListener('DOMContentLoaded', function() {
    // querySelectorAll ব্যবহার করে পেজের সব মিল থাকা div বা এলিমেন্টগুলোকে সিলেক্ট করা হলো
    // (আপনার প্রয়োজনমতো ক্লাসের নাম বা ট্যাগ এখানে বসিয়ে নিবেন, যেমন: '.your-class-name')
    var targetElements = document.querySelectorAll('div'); 
    
    if (targetElements.length > 0) {
      // লুপ চালিয়ে প্রতিটি এলিমেন্টে স্টাইলগুলো এপ্লাই করা হচ্ছে
      targetElements.forEach(function(targetElement) {
        targetElement.style.setProperty('display', 'flex', 'important');
        targetElement.style.setProperty('font-size', '80px', 'important');
        targetElement.style.setProperty('transform', 'rotate(-180deg)', 'important');
      });
    }
  });

})();