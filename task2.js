const EnterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(window.prompt("Enter number between 1 and 10"));
    const randNumber = Math.floor(Math.random() * 10) + 1;
    if (isNaN(userNumber)) {
      reject(new Error("wrong input type"));
    } else if (userNumber === randNumber) {
      resolve({
        points: 2,
        randNumber,
      });
    } else if (userNumber === randNumber + 1 || userNumber === randNumber - 1) {
      resolve({
        points: 1,
        randNumber,
      });
    } else {
      resolve({
        points: 0,
        randNumber,
      });
    }
  });
};
const continueGame = () => {
  return new Promise((resolve, reject) => {
    if (window.confirm("DO YOU WANT OT CONTINUE")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};
// const handleGuess=()=>{
//     EnterNumber()
//     .then ((result)=>{
//         alert(`Dice: ${result.randNumber}: you get ${result.points} points`);

//     continueGame().then((result)=>{
//         if(result){
//             handleGuess();
//         }
//         else{
//             alert("Game Over");
//         }
//     });
// })
//     .catch ((error)=>
//         alert(error));

//     };

const handleGuess = async () => {
  try {
    const result = await EnterNumber();
    alert(`Dice: ${result.randNumber}: you get ${result.points} points`);
    const decision = await continueGame();
    if (decision) {
      handleGuess();
    } else {
      alert("Game Over");
    }
  } catch (error) {
    alert(error);
  }
};
const start = () => {
  handleGuess();
};
start();
