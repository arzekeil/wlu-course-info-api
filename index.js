const app = require("./src/app");
const port = process.env.PORT || 8080;

async function init() {
    app.listen(port, () => {
        console.log( `server started at http://localhost:${port}` );
    });
}

init();
 