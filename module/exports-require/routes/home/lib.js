"use strict";

const nowDate = () => {
    return new Date();
};

const hello = () => {
    console.log('lib hello');
};

module.exports = {nowDate, hello};
