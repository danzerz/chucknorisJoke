const onMyBirthday = (isKayoSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isKayoSick) {
        resolve(2);
      } else {
        reject(new Error("iam sad"));
      }
    }, 2000);
  });
};
console.time("timer");
onMyBirthday(false)
  .then((result) => {
    console.timeLog("timer");
    console.log(`i have ${result}`);
  })
  .catch((result) => {
    console.timeLog("timer");
    console.log(result);
  })
  .finally(() => {
    console.log("party");
  });
