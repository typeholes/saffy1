Vue.component('game-button', {
  props: {
    handler:{}, 
    label:{},
    enabled:{default: true},
    cost:{},
  },
  template: 
  '' +
  '   <div>Cost: {{cost}}<br><button v-on:click="handler" :disabled="!enabled" >{{ label}}</button></div>' +
  '' 
})

var app = new Vue({
  el: '#app',
  data: {
    coins:0,
    rate:0,
    acceleration:0,
    autoName: "Auto Coins",
    won: false,
    addCoin:  function() {
     app.coins += 1;
    },
    addAuto:  function() {
    app.rate+=1 ;
    app.coins-=10;
    app.autoName= "Increase Rate";
     },
    addAcceleration:  function() {
      app.acceleration+=1 ;
      app.coins-=100; 
       },
    winGame: function() {
       app.coins-=10000;
       app.won = true;
    }
  }
}) 


 function updateSeconds() {
  app.coins += app.rate;
  app.rate += app.acceleration;
} 

setInterval(updateSeconds, 1000); 
 