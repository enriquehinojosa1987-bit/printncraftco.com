/* Print & Craft Co. — cart badge sync (main site side).
   The shop (shop.printncraftco.com) writes the cart count into a
   pnc_cart_count cookie scoped to .printncraftco.com; here we read it
   and paint every .cart-badge on the page. Re-checks periodically and
   on tab focus so counts stay fresh across tabs. */
(function () {
    function readCount() {
        var m = document.cookie.match(/(?:^|;\s*)pnc_cart_count=(\d+)/);
        return m ? parseInt(m[1], 10) : 0;
    }
    function paint() {
        var n = readCount();
        var badges = document.querySelectorAll('.cart-badge');
        for (var i = 0; i < badges.length; i++) {
            badges[i].textContent = n;
            badges[i].style.display = n > 0 ? '' : 'none';
        }
    }
    paint();
    document.addEventListener('visibilitychange', paint);
    window.addEventListener('focus', paint);
    setInterval(paint, 3000);
})();
