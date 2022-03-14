const fs = require('fs');

const dirName = './out/aa/bb';

(async () => {
    try {
        await fs.promises.mkdir(dirName, { recursive: true });
    } catch (err) {
        console.error(err);
    }
})();
