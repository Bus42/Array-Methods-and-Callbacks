import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
console.log(fifaData.filter(d => d.Year === 2014)[0]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final
console.log(fifaData.filter(d => d.Year === 2014)[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final
console.log(fifaData.filter(d => d.Year === 2014)[0]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final
console.log(fifaData.filter(d => d.Year === 2014)[0]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */
const worldCup2014 = fifaData.filter(d => d.Year === 2014)[0];
console.log(worldCup2014['Home Team Goals'] > worldCup2014['Away Team Goals'] ? worldCup2014['Home Team Name'] : worldCup2014['Away Team Name']);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data = fifaData) {
    return data.filter(d => d.Stage === "Final");
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(cb = getYears) {
    //use map property to return indicated value from each index - equivalent to pushing the Year property of each index to the years array.
    const years = cb.map(d => d.Year);
    return years;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

function getWinners(data = fifaData, cb = getFinals) {
    //map over finals to compare home and away goals and use a ternary expression to determine which name to return
    const winners = cb(data).map(d => d["Home Team Goals"] > d["Away Team Goals"] ? d["Home Team Name"] : d["Away Team Name"]);
    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

// sloppy and, honestly, mostly guesswork
function getWinnersByYear(data = fifaData, cb1 = getYears, cb2 = getWinners) {
    const winnersByYear = [];
    const winners = cb2(data, cb1(getFinals(data)));
    const years = (cb1(getFinals(data)));
    years.forEach((year, i) => winnersByYear.push(`In ${year}, ${winners[i]} won the world cup!`))
    return winnersByYear;
}

// Alternate method, much faster and easier to understand.

function getWinnersMuchFaster(data = fifaData, cb = getFinals) {
    return cb(data).map(year => `In ${year.Year}, ${year['Home Team Goals'] > year['Away Team Goals'] ? year['Home Team Name'] : year['Away Team Name']} won the world cup!`);
}
console.log(getWinnersMuchFaster());



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(cb = getFinals(fifaData)) {
    // Use map to extract total goals from each match, then use reduce to average the numbers
    const totalGoals = cb.map(game => game['Home Team Goals'] + game['Away Team Goals']).reduce((a, b) => a + b) / cb.length;
    //use toFixed to round to nearest nth decimal place
    return totalGoals.toFixed(2);
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins( /* code here */ ) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals( /* code here */ ) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense( /* code here */ ) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
    console.log('its working');
    return 'bar';
}
export default {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}