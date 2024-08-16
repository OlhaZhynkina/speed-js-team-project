import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
