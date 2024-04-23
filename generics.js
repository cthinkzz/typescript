"use strict";
const firstElem = (arr) => {
    return arr[0];
};
firstElem(['1', '2']).toUpperCase(); //error
const firstElemGeneric = (arr) => {
    return arr[0];
};
firstElem(['1', '2']).toUpperCase(); // error
firstElemGeneric(['1', '2']).toUpperCase(); //no error
firstElemGeneric([false, true]); //we can pass any type of data, no need to mention which type in advance
