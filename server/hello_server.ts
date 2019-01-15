/**
 * Created by cyb on 2019/1/14.
 */
import * as http from 'http';
const server = http.createServer((request, response)=>{
    response.end("Hello Node!")
});
server.listen(8000);