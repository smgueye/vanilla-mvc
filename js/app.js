// Pour comprendre les methods alias get et qs, veuillez consulter le fichier helpers.js.

(function () {
  'use strict';

  // Dom elements.
  const $selectedProcessTitleElement = get("process-detail-title-id");
  const $selectedProcessDescElement = get("process-detail-desc-id");
  const $cardsContentElement = get("cards-content-id");


  const models = {
    users: [],
    selectedItemId: null,
  }

  /**
   * Module contenant l'ensemble des methodes qui concerent *uniquement* le retrait des données sur un serveur distant.
   */
  const services = {
    fetchUsers: function () {
      return fetch('https://jsonplaceholder.typicode.com/users')
    },
  }

  const actions = {
    getUsers: function () {
      return services
        .fetchUsers()
        .then(response => response.json())
        .then(users => {
          models.users = users;
          console.log("Users fetched, " + models.users.length + " records");
          return users;
        })
    }
  }

  const view = {
    clearBlock: function (domElementId) {
      var range = document.createRange();
      range.selectNodeContents(get(domElementId));
      range.deleteContents();
    },

    render: function () {
      view.clearBlock("cards-content-id");
    }
  }

  const controller = {
    init: function () {
      actions.getUsers().then((users) => {
        users.forEach(user => {
          const processFactory = new ProcessFactory(user);
          $cardsContentElement.appendChild(processFactory.buildProcessCard())
        });
      });
      view.render()
    },

    setProcess: function (itemId) {
      models.selectedItemId = itemId;

      const p = models.items.find(record => record.id === itemId)
      $selectedProcessDescElement.textContent = p.name
      $selectedProcessDescElement.textContent = p.desc
    }
  }

  $on(window, 'load', controller.init);
  $on(window, 'hashchange', controller.init)
})();