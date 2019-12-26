window.addEventListener('load', ()=> {
    const options = {
    strings: [
  'Joyeux Noël',
  'Bonne année'],
    typeSpeed: 50,
      loop: true
  };
  const div = document.querySelector('.div');
  const typed = new Typed(div, options);
  return typed;
  })