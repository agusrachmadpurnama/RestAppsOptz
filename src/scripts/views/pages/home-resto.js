/* eslint linebreak-style: ["error", "windows"] */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantList } from '../templates/template-creator';

const HomeResto = {
  async render() {
    return `       
                <h2 class='heading'>Daftar Restauran</h2>
                <div id='content' class='content'></div>              
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.list();
    const restaurantsContainer = document.querySelector('#content');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantList(restaurant);
    });
  },
};

export default HomeResto;
