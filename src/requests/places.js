import config from '../config/secrets';

function getPlaces(){
  return fetch(config.url+"/places").then(data =>{
    return data.json();
  }).catch(console.log)
}

function getPlace(slug){
  return fetch(config.url+"/places/"+slug).then(data =>{
    return data.json();
  }).catch(console.log)
}

export {getPlaces, getPlace};

export default {
  places: [
    {
      imageUrl: '/images/place-3.jpg',
      title: 'Desayunos el rey',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'P. Sherman Calle Wallaby 42 Sydney'
    },
    {
      imageUrl: '/images/place-1.jpg',
      title: 'Starbucks Norte',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'P. Sherman Calle Wallaby 42 Sydney'
    },
    {
      imageUrl: '/images/place-2.jpg',
      title: 'Pizza de amor',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'P. Sherman Calle Wallaby 42 Sydney'
    }
  ]
}
