'use strict';

const app = require('./app')
const app2 = require('./app2')
const config = require('./configDomain1');

app.listen(config.portServer1, () => {
    console.log(`Server 1 running in http://localhost:${config.portServer1}`);
});

app2.listen(config.portServer2, () => {
    console.log(`Server 2 running in http://localhost:${config.portServer2}`);
});