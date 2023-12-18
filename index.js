// code your solution here
function superbowlWin(array){
   const winningGame = array.find(item =>item.result === 'W');
   if (winningGame){
    return winningGame.year;
   }else{
    return undefined;
   }
   }


//  The find() method takes a callback function as its argument, which should return a boolean based on condition.