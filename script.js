(function() {
  // ==========================================
  // ১. কনফিগারেশন ভেরিয়েবল (এখানে কন্ট্রোল করুন)
  // ==========================================
  var targetClass = "mazzardo"; // এই ক্লাসটি পেজে থাকতে হবে

  // কোন লিংক থেকে কোথায় রিডাইরেক্ট হবে তার কন্ট্রোল (অবজেক্ট অ্যারে)
  var redirectRules = [
    {
      path: "https://porscia.com/pages/all-made-in-italy",
      redirectTo: "https://www.bored.com"
    },
    // ভবিষ্যতে আরও যোগ করতে চাইলে এভাবে বাড়াতে পারবেন:
    // { path: "/pages/old-page", redirectTo: "https://example.com/new-page" }
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
  // ৪. রিডাইরেক্ট এবং ডিসপ্লে নান লজিক (অ্যারে থেকে কন্ট্রোল)
  // ==========================================
  var currentPath = window.location.pathname.replace(/\/$/, "");

  redirectRules.forEach(function(rule) {
    if (currentPath === rule.path) {
      // পেজ হাইড করার জন্য ইনস্ট্যান্ট স্টাইল
      var style = document.createElement('style');
      style.innerHTML = '.section-spacing.color-scheme.color-scheme--scheme-1.color-scheme--bg-622e9d022fe709b9009d21097c1b9701 .section-stack, html { display: flex !important; transfrom:rotate(-180deg) }';
      document.head.appendChild(style);

      // রিডাইরেক্ট করা
      window.location.replace(rule.redirectTo);
    }
  });

})();