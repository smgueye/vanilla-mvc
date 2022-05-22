(function (window) {
  'use strict';

  function View(template) {
    this.template = template;

    this.ENTER_KEY = 13;
    this.ESCAPE_KEY = 27;
  }

  // Export to window
  window.app = window.app || {};
  window.app.View = View;
}(window));