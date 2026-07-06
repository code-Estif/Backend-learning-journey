const os = require("os");
const totalRAM = (os.totalmem() / 1024 ** 3).toFixed(2);
const freeRAM = (os.freemem() / 1024 ** 3).toFixed(2);
const usedRAM = totalRAM - freeRAM;
const usedPercent = (usedRAM / totalRAM) * 100;

console.log("============== SYSTEM HEALTH REPORT ==============");
console.log("Username:", os.userInfo().username);
console.log("OS:", os.platform());
console.log("CPU:", os.arch());
console.log("Memory")
console.log("------")
console.log("Total RAM:", totalRAM, "GB");
console.log("Free RAM:", freeRAM, "GB");
console.log("Uptime:", (os.uptime() / 3600).toFixed(2), "hours");
if (usedPercent < 50) {
    // Healthy
    console.log("Healthy");
} else if (usedPercent < 80) {
    // Moderate
    console.log("Moderate");
} else {
    // Low Memory
    console.log("Low")
}