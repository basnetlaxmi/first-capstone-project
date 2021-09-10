const speakers = [
  {
    image: './images/speaker_01.png',
    alt: 'Speaker-1',
    name: 'yohai benkler',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_02.png',
    alt: 'Speaker-2',
    name: 'yohai benkler',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_03.png',
    alt: 'Speaker-3',
    name: 'yohai benkler',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_04.png',
    alt: 'Speaker-4',
    name: 'yohai benkler',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_05.png',
    alt: 'Speaker-5',
    name: 'yohai benkler',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_05.png',
    alt: 'Speaker-5',
    name: 'yohai benkler',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },
];

const speakersContainer = document.querySelector('.speakers');

function speaker(s) {
  return `<div class="speaker d-flex justify-content-around mt-3 ps-3">
    <img src="${s.image}" alt="${s.alt}">
        <div class="ps-2">
        <h3>${s.name}</h3> 
        <h5>${s.designation}</h5>
        <p class="w-75">${s.biography}</p>
        </div>
    </div>
 `;
}

speakersContainer.innerHTML = speakers.map((s) => speaker(s)).join('');