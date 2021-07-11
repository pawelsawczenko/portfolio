const carousel = () => {
  let position = 0;
  const slidesToShow = document.documentElement.clientWidth >= 990 ? 6 : 1;
  const slidesToScroll = document.documentElement.clientWidth >= 990 ? 3 : 1;
  const container = document.querySelector('.carousel');
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const itemsCount = items.length;
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');

  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach((item) => {
  item.style.minWidth = `${itemWidth - 16}px`;
  item.style.marginRight = '8px';
  item.style.marginLeft = '8px';
  });

  btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position)  / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
  });

  btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
  });

  const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  checkBtns();
  btnNext.click();
  btnPrev.click();
}

carousel();

window.addEventListener('resize', carousel);