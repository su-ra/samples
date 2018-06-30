// bluebird promise sample

const Promise = require('bluebird');

const myTimer = (cbFunc) => {
  setTimeout(
    cbFunc
    ,1000);
}

const myPTimer = Promise.promisify(myTimer);

myPTimer().then(
    () => {
      console.log('timer filed (1)');
      return myPTimer();
    }
).then(
    () => {
      console.log('timer filed (2)');
      return myPTimer();
    }
).then(
    () => {
      console.log('timer filed (3)');
      //return myPTimer();
    }
);

