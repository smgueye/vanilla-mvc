(function (window) {
  'use strict';

  window.qs = function (selector, scope) {
    return (scope || document).querySelector(selector)
  }

  window.qsAll = function (selector, scope) {
    return (scope || document).querySelectorAll(selector)
  }

  window.get = function (id, scope) {
    return (scope || document).getElementById(id)
  }

  window.$on = function (target, type, callback, useCapture) {
    target.addEventListener(type, callback, !!useCapture);
  };

  window.$delegate = function (target, selector, type, handler) {
    function dispatchEvent(event) {
      var targetElement = event.target;
      var potentialElements = window.qsa(selector, target);
      var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

      if (hasMatch) {
        handler.call(targetElement, event);
      }
    }

    // https://developer.mozilla.org/en-US/docs/Web/Events/blur
    var useCapture = type === 'blur' || type === 'focus';

    window.$on(target, type, dispatchEvent, useCapture);
  };

  window.$parent = function (element, tagName) {
    if (!element.parentNode) {
      return;
    }
    if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
      return element.parentNode;
    }
    return window.$parent(element.parentNode, tagName);
  };

  window.$elementDomFactory = function (type, attributes, ...children) {
    const el = document.createElement(type)

    for (const key in attributes) {
      el.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child))
      } else {
        el.appendChild(child)
      }
    })

    return el
  }

  NodeList.prototype.forEach = Array.prototype.forEach;
})(window);