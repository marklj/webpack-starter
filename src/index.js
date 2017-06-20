import _ from 'lodash';
import AmericanFlagPath from './img/american-flag.png';
import LatoPath from './fonts/lato.woff2';
import './css/diff-tool.css';


function component () {
  var element = document.createElement('h1');

  element.innerHTML = _.join(['Hello, ', 'webpack'], ' ');
  element.innerHTML += '!';

  return element;
}

function flag () {
  var img = document.createElement('img');
  img.setAttribute('src', AmericanFlagPath);
  img.setAttribute('class', 'flag');

  return img;
}

document.body.appendChild(component());
document.body.appendChild(flag());
