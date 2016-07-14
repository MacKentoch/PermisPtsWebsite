/**
* a promised delay
**/

class PromisedTimeoutClass {
  delay(timeToWait) {
    const promise = new Promise((resolve, reject)=>{
      if (!this.isNumber(timeToWait)) {
        reject('timeToWait parameter is NaN');
      }
      setTimeout(()=>resolve(), timeToWait);
    });
    return promise;
  }

  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}


const PromisedTimeout = new PromisedTimeoutClass();

export {
  PromisedTimeout
};
