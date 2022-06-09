// Pour comprendre les methods alias get et qs, veuillez consulter le fichier helpers.js.

(function () {
  'use strict';

  const models = {
    users: [{
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    }],
  }

  /*const Url = {
    GET_USERS: 'https://jsonplaceholder.typicode.com/users'
  }

  const services = {
    fetchUsers: function () {
      return fetch(Url.GET_USERS)
    },
  }*/

  const view = {
    clearBlock: function (domElementId) {
      var range = document.createRange();
      range.selectNodeContents(get(domElementId));
      range.deleteContents();
    },

    render: function () {
      // view.clearBlock("cards-content-id");
    }
  }

  const controller = {
    init: () => {
      controller.bindEvents()
      controller.render()
    },

    render: () => {
      models.users.forEach((user) => {
        const factory = new UserFactory(user);
        const cardElement = factory.buildUserCard();
        get('cards-content-id').appendChild(cardElement);
      })
    },

    bindEvents: () => {
      // this.$cardsContainer = get('cards-content-id');
    },
  }

  $on(window, 'load', controller.init);
  $on(window, 'hashchange', controller.init)
})();