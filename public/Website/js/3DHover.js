const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mousemove', handleMouseMove);

    function handleMouseMove(event) {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const mouseX = event.clientX - card.getBoundingClientRect().left;
        const mouseY = event.clientY - card.getBoundingClientRect().top;
        const rotateXValue = ((mouseY / cardHeight) - 0.5) * 20;
        const rotateYValue = ((mouseX / cardWidth) - 0.5) * 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg)`;
    }

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});
