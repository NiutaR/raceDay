let  raceNumber = Math.floor(Math.random() * 1000);

let runnerRegistered = true;

let ageRunner = 25;

if(ageRunner >= 18 && runnerRegistered === true) {
    raceNumber += 1000;
}

console.log(raceNumber);

if(ageRunner > 18 && runnerRegistered === true) {
    console.log(`${raceNumber} You race will start at 9:30 am.`);
} else if (ageRunner > 18 && runnerRegistered === false) {
    console.log(`${raceNumber} Your race will start at 11:00 am!`);
} else if (ageRunner < 18 && runnerRegistered )