// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const matchingDrivers = findMatching(drivers, 'bobby');
console.log(matchingDrivers);


function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  const matchingDrivers1 = fuzzyMatch(drivers, 'Sa');
  console.log(matchingDrivers);
  

  const drivers1 = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' },
  ];
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  const matchingDrivers2 = matchName(drivers, 'Bobby');
  console.log(matchingDrivers);
  