function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
const fiveHeadsSync = new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 25 && attempts <= 100000000) {
        attempts++;
        let result = tossCoin();
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    if (attempts < 100000000) {
        resolve(`It took ${attempts} tries to flip 25 "heads" in a row`);
    } else {
        reject(`Could not get 25 Heads in a row after 100,000,000 attempts`);
    }
});
fiveHeadsSync.then((res) => console.log(res)).catch((err) => console.log(err));
