//<![CDATA[
const proto = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

function go() {
  for (var i=1; i<15; i++) {
    const heart = proto.cloneNode(true);
    heart.addEventListener('animationend', () => heart.parentNode.removeChild(heart));

    wrapper.append(heart);
  }
}

const button = document.querySelector('.js-button');

button.addEventListener('click', () => {
  go();
  button.blur();
});
//]]>
