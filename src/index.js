import './polyfill';
import _ from 'lodash';
import AmericanFlagPath from './img/american-flag.png';
import LatoPath from './fonts/lato.woff2';
import './css/style.pcss';

function bootstrap() {
  document.body.appendChild(component());
  document.body.appendChild(flag());
}

function component () {
  var element = document.createElement('h2');

  element.innerHTML = _.join(['Hello, ', 'world'], ' ');
  element.innerHTML += '!';

  return element;
}

function flag () {
  var img = document.createElement('img');
  img.setAttribute('src', AmericanFlagPath);
  img.setAttribute('class', 'flag');

  return img;
}

bootstrap();
