import { from } from './collections';

export const addClass = (elem, className) => elem.classList.add(className);

export const addEvent = (elem, fn) => elem.addEventListener(fn);

export const append = (elem, parent) => parent.appendChild(elem);

export const createElement = tag => document.createElement(tag);

export const forEachElements = (selector, fn) => from(getElements(selector)).forEach(elem => fn(elem));

export const getElement = selector => document.querySelector(selector);

export const getElements = selector => document.querySelectorAll(selector);

export const hasClass = (elem, className) => elem.classList.contains(className);

export const removeClass = (elem, className) => elem.classList.remove(className);

export const removeElement = elem => elem.parentNode.removeChild(elem);

export const setAttribute = (elem, ...args) => elem.setAttribute(...args);

export const toggleClass = (elem, className) => elem.classList.toggle(className);

export const treeWalker = (elem, filter) => document.createTreeWalker(elem, NodeFilter.SHOW_ELEMENT, filter, false);