document.addEventListener('DOMContentLoaded', function() {


    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.tween-animate-title', cb);

    const header = document.querySelector('.header');
    const _navAnimation = function (el , inview) {
        if(inview) {
            header.classList.remove('triggered');
        } else {
            header.classList.add('triggered');
        }
    }

    const so2 = new ScrollObserver('.nav-trigger', _navAnimation, {once:false});

    new MobileMenu;
});