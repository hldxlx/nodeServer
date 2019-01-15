"use strict";
/**
 * Created by cyb on 2019/1/14.
 */
var http = require('http');
var server = http.createServer(function (request, response) {
    response.end("Hello Node!");
});
server.listen(8000);
//# sourceMappingURL=hello_server.js.map