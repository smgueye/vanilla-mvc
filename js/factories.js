function ProcessFactory(data) {
  const { id, name, email } = data;

  function buildProcessCard() {
    return $elementDomFactory('div', { class: 'card', id: `process-${id}`, },
      $elementDomFactory('h5', { class: 'card__title' }, name),
      $elementDomFactory('p', { class: 'card__desc' }, email));
  }

  return { id, name, email, buildProcessCard }
}
