const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const listOfImages = images
  .map(
    image =>
      `<li class="item"> <img class="photo" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join('');
console.log(listOfImages);

galleryList.insertAdjacentHTML('beforeend', listOfImages);

const galleryStyle = document.querySelector('.gallery');
galleryStyle.style.listStyle = 'none';
galleryStyle.style.display = 'flex';
galleryStyle.style.flexDirection = 'column';
galleryStyle.style.justifyContent = 'center';
galleryStyle.style.alignItems = 'center';
galleryStyle.style.marginBottom = '10px';

const photoStyle = document.querySelectorAll('.gallery .item .photo');
const firstPhoto = photoStyle[0];
firstPhoto.style.marginBottom = '20px';
firstPhoto.style.width = 'calc(95vw - 30px)';

const secondPhoto = photoStyle[1];
secondPhoto.style.width = 'calc(95vw - 30px)';
secondPhoto.style.marginBottom = '20px';

const thirdPhoto = photoStyle[2];
thirdPhoto.style.width = 'calc(95vw - 30px)';
