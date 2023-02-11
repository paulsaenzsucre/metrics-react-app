import worldMap from '../assets/world.svg';
import africaMap from '../assets/africa.svg';
import europeMap from '../assets/europe.svg';
import asiaMap from '../assets/asia.svg';
import americasMap from '../assets/americas.svg';
import oceaniaMap from '../assets/oceania.svg';

const WORLD = {
  id: 'WORLD',
  commonName: 'WORLD',
  officialName: '',
  continent: 'world',
  flag: worldMap,
  population: 100000,
};

const CONTINENTS = [
  {
    id: 'AFRICA',
    commonName: 'Africa',
    officialName: '',
    continent: 'world',
    flag: africaMap,
    population: 100000,
  },
  {
    id: 'AMERICAS',
    commonName: 'WORLD',
    officialName: '',
    continent: 'world',
    flag: americasMap,
    population: 100000,
  },
  {
    id: 'ASIA',
    commonName: 'WORLD',
    officialName: '',
    continent: 'world',
    flag: asiaMap,
    population: 100000,
  },
  {
    id: 'EUROPE',
    commonName: 'WORLD',
    officialName: '',
    continent: 'world',
    flag: europeMap,
    population: 100000,
  },
  {
    id: 'OCEANIA',
    commonName: 'WORLD',
    officialName: '',
    continent: 'world',
    flag: oceaniaMap,
    population: 100000,
  },
];

export {
  WORLD,
  CONTINENTS,
};
