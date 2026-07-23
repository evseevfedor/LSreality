// Running line after Main Banner area
(function(){
  const SPEED = 30; // пикселей в секунду (меняйте при желании)
  const track = document.querySelector('.ticker-track');
  if(!track) return;

  // Дублируем контент для бесшовного цикла
  track.innerHTML = track.innerHTML + track.innerHTML;

  function setDuration(){
    const width = track.scrollWidth / 2; // ширина исходного контента
    const duration = width / SPEED;
    track.style.animationDuration = duration + 's';
  }
  setDuration();
  window.addEventListener('resize', setDuration);
})();