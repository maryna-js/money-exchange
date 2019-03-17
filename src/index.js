// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    
        coins = {};
        let value0 = 0;
        let value1 = 0;
        let value2 = 0;
        let value3 = 0;
        let value4 = 0;
        
if (currency <= 0) {
   return {};
  } else if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  } else {
        while (currency >= 50) {
        coins.H = ++value0;
        currency = currency -50;}
        while (currency >= 25) {
        coins.Q = ++value1;
        currency = currency -25;}
        while (currency >= 10) {
        coins.D = ++value2;
        currency = currency -10;}
        while (currency >= 5) {
        coins.N = ++value3;
        currency = currency -5;}
        while (currency >= 1) {
        coins.P = ++value4;
        currency = currency -1;}
        return coins;
    }    
        
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
