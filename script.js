var money = 10000;
var running = 1;
var maxClickUpgradePrice = 200
var clickedMax = 1000;
var clicked = 1000;
var profitPerSecond = 0
var refillTimer = 3600;
var beginnerSharePrice = 20;
var intermediateSharePrice = 4000;
var freeClickRefillText = "";
var advancedSharePrice = 10000;
function addMoney() {
    if (clicked > 0) {
        money++
        clicked--
    } else {
        money = money
        clicked =clicked
    }
   
    
}
if (running === 1) {
    setInterval(appendToDisplay, 1);
  
} 


function appendToDisplay() {
    $("#money").val(money);
    $(".clicked").val(`${clicked}/${clickedMax}`);
    $(".profit-per-second").val(` profit per sec ${profitPerSecond}`); 
    $("#beginnerShare").text(`${beginnerSharePrice} wtf`);
    $("#intermediateShare").text(`${intermediateSharePrice} wtf`);
    $(".freeClickRefill").text(freeClickRefillText);
    $("#maxClickUpgrade").text(`${maxClickUpgradePrice} wtf`);
    $("#advancedShare").text(`${advancedSharePrice} wtf`);
  
}
 setInterval(function () {
   if (clicked<clickedMax) {
   clicked++ 
   }
   if (refillTimer<3600) {
    refillTimer++;    
    } 
   else{
    clicked=clicked
   }
   money+=profitPerSecond
   
}, 1000);
setInterval(() => {
    if (refillTimer === 3600) {
        freeClickRefillText = `activate`;
    }else if (refillTimer < 3600){
        freeClickRefillText = `${3600-refillTimer}s left`
      }
     
}, 1000);

function freeClickRefill() {
  
  if (refillTimer === 3600) {
    clicked = clickedMax
    refillTimer = 0;
}
   else {
    refillTimer = refillTimer
    alert(`you have ${3600-refillTimer} seconds till you can use this feature` )
    clicked=clicked
    
  }

  
}
function beginnerShare() {
    if (money>beginnerSharePrice) {
        money = money-beginnerSharePrice;
        profitPerSecond +=0.5
        beginnerSharePrice = beginnerSharePrice*2
    }
    else{
        alert(`you need ${beginnerSharePrice-money} WTF coins to increase`)
    }
    
}
function intermediateShare() {
    if (money>intermediateSharePrice) {
        money = money-intermediateSharePrice;
        profitPerSecond +=15
        intermediateSharePrice = intermediateSharePrice*2
    }
    else{
        alert(`you need ${intermediateSharePrice-money} WTF coins to increase`)
    }
    
}

function advancedShare() {
    if (money>advancedSharePrice) {
        money = money-advancedSharePrice;
        profitPerSecond +=80
        advancedSharePrice = advancedSharePrice*2
    }
    else{
        alert(`you need ${advancedSharePrice-money} WTF coins to increase`)
    }
    
}
function maxClickUpgrade() {
    if (money>maxClickUpgradePrice) {
        money = money-maxClickUpgradePrice;
       clickedMax +=100
    maxClickUpgradePrice = maxClickUpgradePrice*2
    }
    else{
        alert(`you need ${maxClickUpgradePrice-money} WTF coins to increase`)
    }
    
}
