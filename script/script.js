const runningText = document.getElementsByClassName('running_text');

for (let i = 0; i < runningText.length; i++) {
  runningText[i].textContent = `
    Дело помощи утопающим — дело рук самих утопающих! • Шахматы двигают
    вперед не только культуру, но и экономику! • Лед тронулся, господа
    присяжные заседатели!
  `;
}

const members = [
  {
    id: 1,
    name: 'Хозе-Рауль Капабланка',
    description: 'Чемпион мира по шахматам',
  },
  {
    id: 2,
    name: 'Эммануил Ласкер',
    description: 'Чемпион мира по шахматам',
  },
  {
    id: 3,
    name: 'Александр Алехин',
    description: 'Чемпион мира по шахматам',
  },
  {
    id: 4,
    name: 'Арон Нимцович',
    description: 'Чемпион мира по шахматам',
  },
  {
    id: 5,
    name: 'Рихард Рети',
    description: 'Чемпион мира по шахматам',
  },
  {
    id: 6,
    name: 'Остап Бендер',
    description: 'Гроссмейстер',
  },
];

const membersSection = document.getElementById('members');

members.forEach((member) => {
  if (membersSection !== null || membersSection !== undefined) {
    const container = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h4');
    const description = document.createElement('p');
    const button = document.createElement('button');

    name.innerHTML = member.name;
    description.innerHTML = member.description;
    button.innerHTML = 'Подробнее';

    if (membersSection !== null || membersSection !== undefined) {
      container.appendChild(image);
      container.appendChild(name);
      container.appendChild(description);
      container.appendChild(button);
    }

    membersSection.appendChild(container);
  }
});
