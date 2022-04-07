// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return [...array.slice(0, 2)]
}

const returnLastTwoDrivers = function(array) {
    return [...array.slice(2)]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(abc) {
    return function() {
            return (abc * 5)
    }
}

const fareDoubler = function(abc) {
    return abc * 2
}
const fareTripler = function (abc) {
    return abc * 3
}

const selectDifferentDrivers = function (returnLastTwoDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers()
}