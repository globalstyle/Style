(function() {
  // ==========================================
  // ১. কনফিগারেশন ভেরিয়েবল (এখানে কন্ট্রোল করুন)
  // ==========================================
  var targetClass = "mazzardo"; // এই ক্লাসটি পেজে থাকতে হবে

  // কোন পেজ (পাথ) থেকে কোথায় রিডাইরেক্ট হবে তার কন্ট্রোল
  var redirectRules = [
    {
      path: "/pages/all-made-in-italy", // শুধু ডোমেইনের পরের অংশটুকু দিন
      redirectTo: "https://www.bored.com"
    }
  ];


  // ==========================================
  // ২. ক্লাস চেক লজিক (ক্লাস না থাকলে কোড বন্ধ)
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
  // ৪. রিডাইরেক্ট এবং ডিসপ্লে নান লজিক
  // ==========================================
  var currentPath = window.location.pathname.replace(/\/$/, "");

  redirectRules.forEach(function(rule) {
    // সাব-পাথ চেক করার জন্য
    if (currentPath === rule.path || currentPath + "/" === rule.path) {
      
      // পেজ কন্টেন্ট ডিসপ্লে নান করার জন্য
      var style = document.createElement('style');
      style.innerHTML = 'body { display: none !important; }';
      document.head.appendChild(style);

      // অন্য লিংকে রিডাইরেক্ট করা
      window.location.replace(rule.redirectTo);
    }
  });

})();