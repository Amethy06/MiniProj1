<template>
    <div class="QuemSou">
      <h1>{{ msg }}</h1>
      <div class="container">
        <div class="texto">
          <p>
              O meu nome é Maria Beatriz, sou natural de Vila Nova de Gaia e estou neste momento no mestrado de Tecnologia Multimédia, na UTAD.
          </p>
          <p>
              A minha maior paixão é o design, mais específicamente o UX/UI. Além disso também tenho um grande gosto pela criação de identidades visuais.
          </p>
          <p>
              Sabe mais sobre o meu trabalho <router-link to="/OQueFaco">aqui</router-link>
          </p>
        </div>
        <div class="imagem"><img src="../assets/eu.png" /></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'QuemSou',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped>
  a {
    color: black;
  }
  .QuemSou{
    width: 100%;
    margin-bottom: 100px;
    margin-top: 200px;
  }

  h1{
    width: 80%;
    text-align: left;
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
  router-link{
    color: black;
  }

  @media only screen and (max-width: 600px) {
   
    .container {
      flex-direction: column;
    }
    .texto,
    img {
      width: 100%; 
      float: none; 
      position: relative;
    }
    .texto{
    margin: auto;
    text-align: left;
    font-size: 20px;
  }
  img{
    margin-top: 5%;
  }
  }
</style>
  </style>