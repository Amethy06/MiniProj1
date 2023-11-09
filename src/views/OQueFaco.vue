<template>
  <div class="OQueFaco">
    <h1>O Que Faço?</h1>
    <div class="container">
      <div class="col">
      <p>Criação de Logótipos</p>
      <img src="../assets/aautadrugby.png" />
      </div>
      <div class="col">
      <p>Design de Websites</p>
      <img src="../assets/DKA.png" />
      </div>
      <div class="col">
      <p>Conteúdo de Redes Sociais</p>
      <img src="../assets/Jogo.png" />
      </div>
      <div class="col">
      <p>Ilustrações</p>
      <img src="../assets/ilustracoes.webp" />
      </div>
    </div>
    <h1>Digital Skills</h1>
    <div class="containerskills">
     <div class="skills">
      <img src="../assets/PS.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="emptydot"></span>
      </div>
     </div>
     <div class="skills">
      <img src="../assets/AI.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="halfdot"></span>
      </div>
     </div>
     <div class="skills">
      <img src="../assets/LR.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="halfdot"></span>
      </div>
     </div>
     <div class="skills">
      <img src="../assets/PR.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="emptydot"></span>
      </div>
     </div>
     <div class="skills">
      <img src="../assets/Figma.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="halfdot"></span>
        <span class="emptydot"></span>
      </div>
     </div>     
    </div>
    <div class="containerskills">
     <div class="skills">
      <img src="../assets/XD.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="emptydot"></span>
      </div>
     </div>
     <div class="skills">
      <img src="../assets/AE.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="emptydot"></span>
      </div>
     </div>
     <div class="skills">
      <img src="../assets/HTML.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="emptydot"></span>
      </div>
     </div>
     <div class="skills">
      <img src="../assets/CSS.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="emptydot"></span>
      </div>
     </div>
     <div class="skills">
      <img src="../assets/FlutterFlow.png" class="digital">
      <div class="dots">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="emptydot"></span>
      </div>
     </div>     
    </div>
  </div>
</template>

<style scoped>
  a {
    color: black;
  }
  .OQueFaco {
    width: 100%;
    margin-bottom: 100px;
  }

  h1{
    width: 100%;
    margin: auto;
    margin-top: 150px;
  }
  .container {
    margin-left:5%;
    margin-right: 5%;
    margin: auto;
    width: 80%;
}
  p{
    font-size: 20px;
    font-weight: bold;
  }
  img{
    width: 200px;
  }

  .col{
    width: 20%;;
    display: inline-block;
    padding: 20px;
    text-align: center;
    align-content: center;
    vertical-align: top;
    margin-top: 10px;
  }
  
  .containerskills {
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
    margin: auto;
  }

  .skills {
    width: 10%;;
    display: inline-block;
    padding: 20px;
    text-align: center;
    align-content: center;
    vertical-align: top;
    margin-top: 10px;
  }
 .digital{
    width: 100px;
  }
  .dot {
  height: 15px;
  width: 15px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(151,119,185,1) 50%, rgba(94,178,255,1) 100%);
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
}
.halfdot{
  width: 7.5px;
  height: 15px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(151,119,185,1) 50%, rgba(94,178,255,1) 100%);
  border-radius: 10px 0 0 10px;
  display:inline-block;
  margin: 5px;
}

.emptydot{
  height: 13px;
  width: 13px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(61, 56, 155);
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
}

@media only screen and (max-width: 600px) {
    .col {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 10px 0;
    }

    .containerskills {
      width: 100%;
    }

    .skills {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 20px;
    }
    img{
    width: 150px;
  }
  }
  </style>
