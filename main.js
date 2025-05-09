const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const ctx = canvas.getContext("2d");
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if(isMobile) {
    document.getElementById('mobileControls').classList.add('mobile-visible');
}
const car = new Car(100, 100, 30, 50, isMobile ? "MOBILE" : "KEYS");

animate();

function animate(){
    car.update();

    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate);
}