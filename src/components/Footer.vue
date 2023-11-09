<template>
    <footer>
      <a href="#"><img src="../assets/facebook.png"/></a>
      <a href="#"><img src="../assets/instagram.png"/></a>
      <a href="#"><img src="../assets/linkedin.png"/></a>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  footer {
    background-color: black;
    color: white;
    padding: 10px;
    text-align: center;
    position: fixed;
    margin-top: 80px;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  img {
    width: 24px;
    padding: 10px;
  }
  
  </style>
  