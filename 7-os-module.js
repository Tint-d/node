const os = require("os")

// info about current user 
const user = os.userInfo()

// method return the system uptime in sconds
console.log(`the system time is: ${os.uptime}`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMen:os.freemem()
}
console.log(currentOs);