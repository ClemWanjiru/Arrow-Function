const sortingofnumbersArray = [];
 
for(let i=1; i<=3; i++){
    const threeNumbers = parseInt(prompt("Enter your number"));
     
    if(threeNumbers>=0){
        sortingofnumbersArray.push([threeNumbers]);
    }
    else{
        alert("Wrong input");
    }
}
const sortedNumbersArray = [...sortingofnumbersArray].sort((a,b)=>{
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
});

const highestNumber = sortedNumbersArray[0];
const middlenumber= sortedNumbersArray[1];
const lowestNumber= sortedNumbersArray[2];

alert(`your highest is:${highestNumber} and your lowest :${lowestNumber} and your middle :${middlenumber}`);
