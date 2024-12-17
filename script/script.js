// переиспользуемый бегущий динамический текст
const runningText = document.getElementsByClassName('running_text');
for (let i = 0; i < runningText.length; i++) {
  runningText[i].textContent = `
    Дело помощи утопающим — дело рук самих утопающих! • Шахматы двигают
    вперед не только культуру, но и экономику! • Лед тронулся, господа
    присяжные заседатели!
  `;
}

// участники
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

// динамическое отображение участников
const membersSection = document.getElementById('members');
const memberCount = document.getElementById('member_count');

let currentIndex = 0;
const totalMembers = members.length;

members.forEach((member) => {
  if (membersSection !== null || membersSection !== undefined) {
    const container = document.createElement('div');
    container.setAttribute('id', 'member');
    const image = document.createElement('img');
    const name = document.createElement('h4');
    const description = document.createElement('p');
    const button = document.createElement('button');

    name.textContent = member.name;
    description.textContent = member.description;
    button.textContent = 'Подробнее';

    if (membersSection !== null || membersSection !== undefined) {
      container.appendChild(image);
      container.appendChild(name);
      container.appendChild(description);
      container.appendChild(button);
    }

    membersSection.appendChild(container);
  }
});

// скролл участников
function updateMemberCount() {
  memberCount.textContent = `${currentIndex + 1}/${totalMembers}`;
}

function autoScroll() {
  currentIndex = (currentIndex + 1) % totalMembers;
  membersSection.scrollTo({
    left: membersSection.offsetWidth * currentIndex,
    behavior: 'smooth',
  });
  updateMemberCount();
}

updateMemberCount();
setInterval(autoScroll, 4000);

document.querySelector('#prev_arrow').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalMembers) % totalMembers;
  membersSection.scrollTo({
    left: membersSection.offsetWidth * currentIndex,
    behavior: 'smooth',
  });
  updateMemberCount();
});

document.querySelector('#next_arrow').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalMembers;
  membersSection.scrollTo({
    left: membersSection.offsetWidth * currentIndex,
    behavior: 'smooth',
  });
  updateMemberCount();
});

// Скролл этапов
const carousel = document.getElementById('carousel');
const prevArrow = document.getElementById('phase_prev_arrow');
const nextArrow = document.getElementById('phase_next_arrow');
const bulletsContainer = document.getElementById('phase_count');

const containers = document.querySelectorAll('#carousel ol container');
let currentPhaseIndex = 0;

containers.forEach((_, index) => {
  const bullet = document.createElement('div');
  bullet.classList.add('bullet');
  if (index === currentPhaseIndex) bullet.classList.add('active');
  bulletsContainer.appendChild(bullet);
});

const bullets = document.querySelectorAll('.bullet');

function updateArrows() {
  prevArrow.disabled = currentPhaseIndex === 0;
  nextArrow.disabled = currentPhaseIndex === containers.length - 1;
}

function updateActiveBullet() {
  bullets.forEach((bullet, index) => {
    bullet.classList.toggle('active', index === currentPhaseIndex);
  });
}

function scrollToContainer(index) {
  currentPhaseIndex = (index + containers.length) % containers.length;

  const targetContainer = containers[currentPhaseIndex];
  const targetScroll = targetContainer.offsetLeft;

  carousel.scrollTo({ left: targetScroll, behavior: 'smooth' });

  updateArrows();
  updateActiveBullet();
}

prevArrow.addEventListener('click', () => {
  scrollToContainer(currentPhaseIndex - 1);
});

nextArrow.addEventListener('click', () => {
  scrollToContainer(currentPhaseIndex + 1);
});

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    scrollToContainer(index);
  });
});

updateArrows();
