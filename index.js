// Code your solution in this file!
const returnFirstTwoDrivers = (driver) => {
    driver = ['Sally', 'Bob', 'Baboli',  'Freddy', 'Claudia']
    return driver.slice(0,2);
};
returnFirstTwoDrivers();


const returnLastTwoDrivers = (driver) => {
    driver = ['Sally', 'Bob', 'Baboli',  'Freddy', 'Claudia']
    return driver.slice(-2);
};
returnLastTwoDrivers();


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare, multiplier) => {
    return function multiplier() {
        return fare = fare*fare;
    };
};

// const createFareMultiplier = () => {
//     return x => x * x;
// };

const fareDoubler = x => x * 2;

const fareTripler = x => x * 3;



const selectDifferentDrivers = (driver, callback) => {
    return callback(driver);}; 

selectDifferentDrivers(drivers,returnFirstTwoDrivers);



