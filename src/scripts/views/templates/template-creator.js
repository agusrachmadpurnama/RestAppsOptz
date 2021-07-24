/* eslint linebreak-style: ["error", "windows"] */
import CONFIG from '../../globals/config';

const createRestaurantDetail = (restaurant) => `
<div class='restaurant__detail'>
    <div class='restaurant__detail__main'>    
        <div class='poster'>
            <h2>Detail Restauran</h2>
            <img crossorigin='anonymous'
                class='image__resto__detail lazyload'
                src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
                alt="${restaurant.name}">
        </div>
        <div class='restaurant__info_detail'>
            <h2 class='restaurant__title'>${restaurant.name}</h2><br/>
            <p>Alamat Lengkap: ${restaurant.address}</br>Kota: ${restaurant.city}</p>
            <div class='kategori'>
                <h4>Kategori Menu:</h4>
                <ul>    
                ${restaurant.categories
    .map((subCat) => `<li>${subCat.name}</li>`)
    .join('')}  
                </ul>
            </div>
            <h4 class='restaurant__rating'>Rating ${restaurant.rating}</h4>
        </div>
    </div>
    
    <div class='card'>
        <div class='restaurant__info'>
            <h4>Menu Makanan</h4>
            <ul>
                ${restaurant.menus.foods
    .map((foods) => `<li>${foods.name}</li>`)
    .join('')}
            </ul>
        </div>

        <div class='restaurant__info'>
            <h4>Menu Minuman</h4>
            <ul>
                ${restaurant.menus.drinks
    .map((foods) => `<li>${foods.name}</li>`)
    .join('')}
            </ul>
        </div>
    </div>

    <div class='detail__container'>
        <div class='detail__card'>
            <p class='title__container'>Deskripsi</p>
            <p class='desc__container'>${restaurant.description}</p>
        </div>
    </div>
        
    <div class='review__container'>
        <div class='review__card'>
            <p class='judul__detail'>Customer Reviews</p>
            ${restaurant.customerReviews
    .map((review) => `<div class='review__cust'>
                <p>Nama: ${review.name}</br>Ulasan: ${review.review}</br>Tanggal: ${review.date}</p>
                </div>`)
    .join('')}
            </p>
        </div>
    </div>
        
</div>
`;
const createRestaurantList = (restaurant) => `
<div class='restaurant-item'>
<div class='restaurant-item__header'>
    <div class='restaurant-item__header__kota' tabindex='0'>
        <span>Kota ${restaurant.city || '-'}</span>
    </div>
    <img crossorigin='anonymous'
        class='restaurant-item__header__poster lazyload'
        alt='${restaurant.name || '-'}'
        src='${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}'>
</div>
<div class='restaurant-item__content'>
    <h2 class='restaurant__title'>
        <a href='${`/#/detail-resto/${restaurant.id}`}' aria-label='${restaurant.name}'>${restaurant.name ||'-'}</a>
    </h2>
    <div class='restaurant__desc'>
        ${restaurant.description || '-'}
    </div>
    <div class='restaurant-item__header__rating__score'>
        Rating: ${restaurant.rating || '-'}
    </div>
</div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label='like this restaurant' id='likeButton' class='like'>
     <i class='fa fa-heart-o' aria-hidden='true'></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label='unlike this restaurant' id='likeButton' class='like'>
    <i class='fa fa-heart' aria-hidden='true'></i>
  </button>
`;

export {
  createRestaurantList,
  createRestaurantDetail,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
