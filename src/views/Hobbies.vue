<template>
    <div class="Hobbies">
      <h1>Hobbies</h1>
    
    <div class="container">
  <div>
    <Carousel  
    :slidesToShow="isMobile ? 1 : 3"
    :slidesToScroll="isMobile ? 1 : 3"
    :dots="false" > 
        <button slot="prevArrow" class="custom-prev-arrow"  >
            <img src="@/assets/left-arrow.png"/>
        </button>
        <button slot="nextArrow" class="custom-next-arrow">
            <img src="@/assets/right-arrow.png"/>
        </button>
      <div v-for="hobby in hobbies" :key="hobby.id">
        <div class="carousel-item">
          <div class="card-container">
            <div class="circle-container">
              <img :src="hobby.image" alt="Hobby Image" class="hobby-image">
            </div>
            <p class="hobby-title">{{ hobby.name }}</p>
          </div>
        </div>
      </div>
    </Carousel>
  </div>

        </div>
      </div>
  
  </template>
<script>
import Carousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      isMobile: false,
      hobbies: [
        { id: 1, name: 'Crochet', image: require('@/assets/crochet.png') },
        { id: 2, name: 'Maquilhagem', image: require('@/assets/Makeup.jpg') },
        { id: 3, name: 'Viajar', image: require('@/assets/Viajar.png') },
        { id: 4, name: 'Surfar', image: require('@/assets/Surfar.png') },
        { id: 5, name: 'Cozinhar', image: require('@/assets/Bolo.png') },
        { id: 6, name: 'Desenho Digital', image: require('@/assets/Desenho.png') },
        { id: 7, name: 'Fotografia', image: require('@/assets/Foto.png') },
      ],
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 600;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  },
};
</script>
<style>
.Hobbies{
    width: 100%;
    margin-bottom: 100px;
  }

  h1{
    width: 80%;
    margin-top: 200px;
    margin-left: 10%;

  }
  .container {
    width: 80%;
    margin-top: 50px;
    margin:auto; }
  .texto{
    float: left;
    text-align: left;
    width: 50%;
    font-size: 20px;
    position: absolute;
  }
  img{
    width: 600px;
    position: relative;
    float: right;
  }

  .carousel-item {
  text-align: center;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 300px;
  height: 400px;
  margin: auto;
}

.circle-container {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: black;
  border-radius: 50%;
  margin-bottom: 10px;
  overflow: hidden;
  margin: auto;
}

.hobby-image {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.hobby-title {
  color: white;
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
}

button{
    background-color: none;
    text-decoration: none;
}
.custom-prev-arrow,
.custom-next-arrow {
  border: none;
  font-size: 5px;
  cursor: pointer;
  background-color: none;
}

.custom-prev-arrow {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
}

.custom-next-arrow {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
}
.custom-next-arrow img{
    width: 20px;
}
.custom-prev-arrow img{
    width: 20px;
}
@media only screen and (max-width: 600px) {
  .carousel-item {
    text-align: center;
  }

  .card-container {
    width: 70%; 
    margin: auto; 
    height: 300px;
  }

  .circle-container {
    width: 140px;
    height: 140px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 5%;
    margin: auto;
  }

  .hobby-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .hobby-title {
    font-size: 16px;
    margin-top: 5px;
  }

  .custom-prev-arrow,
  .custom-next-arrow {
    font-size: 12px;
  }

  .custom-prev-arrow img,
  .custom-next-arrow img {
    width: 20px;
  }
}
  </style>