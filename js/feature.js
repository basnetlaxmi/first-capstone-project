const speakers = [
  {
    image: './images/speaker_01.png',
    alt: 'Speaker-1',
    name: 'Shyam Chhetri',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_02.png',
    alt: 'Speaker-2',
    name: 'Krishna Chauhan',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_03.png',
    alt: 'Speaker-3',
    name: 'Menaka Khanal',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_04.png',
    alt: 'Speaker-4',
    name: 'Tulasa Neupane',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_05.png',
    alt: 'Speaker-5',
    name: 'Laxmi Basnet',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created the open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },

  {
    image: './images/speaker_06.png',
    alt: 'Rupesh Basnet',
    name: 'yohai benkler',
    designation: 'Professor at Harvard Law School',
    biography: 'Focusing on a collaborative approach in a networked environment, he created open source software and Wikipedia.'
    + '(Main books: The Wealth of the Network , Penguins and Leviathan )',
  },
];

const speakersContainer = document.querySelector('.speakers');

function speaker(s) {
  return `<div class="speaker mb-5 col-12 col-md-5 d-flex">
    <img src="${s.image}" alt="${s.alt}" class="img-fluid">
        <div class="speaker-info font">
        <h3 class="font-bold">${s.name}</h3> 
        <h5 class="color1">${s.designation}</h5>
        <p>${s.biography}</p>
        </div>
    </div>
 `;
}

speakersContainer.innerHTML = speakers.map((s) => speaker(s)).join('');