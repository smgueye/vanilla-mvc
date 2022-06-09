function UserFactory(data) {
  const { id, name, email } = data;

  function buildUserCard() {
    const childrenListItems = buildUserChildList(['Animasso', 'Bryan', 'Margot', 'Jimmy'])
    return $elementDomFactory('div', { class: 'card', id: `process-${id}`, },
      $elementDomFactory('h5', { class: 'card__title' }, name),
      $elementDomFactory('p', { class: 'card__desc' }, email),
      $elementDomFactory('ul', {}, ...childrenListItems));
  }

  function buildUserChildList(children) {
    return children.map(child => ($elementDomFactory('li', {}, child)));
  }

  return { id, name, email, buildUserCard, buildUserChildList }
}
