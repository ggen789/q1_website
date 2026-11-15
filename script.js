const overlay = document.querySelector('.bg-layer--overlay');
const hero = document.querySelector('.hero');

function updateParallax() {
    const total = hero.offsetHeight - window.innerHeight;
    const progress = Math.min(Math.max((window.scrollY - hero.offsetTop) / total, 0), 1);
    const offsetY = (1 - progress) * 220;

    overlay.style.transform = `translate3d(0, ${offsetY}px, 0) scale(1.2)`;
    overlay.style.opacity = Math.min((1 - progress) * -1.5 + 1.4, 1).toFixed(3);
}

window.addEventListener('scroll', updateParallax, { passive: true });
window.addEventListener('resize', updateParallax);
updateParallax();
