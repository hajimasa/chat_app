const Sockette = require('sockette');

const ws = new Sockette('wss://bug0py30xk.execute-api.ap-northeast-1.amazonaws.com/develop', {
    timeout: 5e3,
    maxAttempts: 10,
    onopen: e => console.log('Connected!', e),
    onmessage: e => console.log('Received:', e),
    onreconnect: e => console.log('Reconnecting...', e),
    onmaximum: e => console.log('Stop Attempting!', e),
    onclose: e => console.log('Closed!', e),
    onerror: e => console.log('Error:', e)
});


const sendMessage = (event) => {
        console.log('send message', event)
        this.ws.json({
            action: "sendmessage",
            data: this.state.msg
        });
}


// Reconnect 10s later
setTimeout(ws.reconnect, 10e3);