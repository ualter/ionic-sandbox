var net = require('net-socket');
 
var socket = net.connect(6666, 'localhost');
 
socket.setEncoding('utf8');
socket.on('connect', function () {
    // connected
    socket.end('hello server');
    socket.destroy();
});