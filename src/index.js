import shoppingList from './shopping-list.js';

import $ from 'jquery';
import './index.css';


const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
