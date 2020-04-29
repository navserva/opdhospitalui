const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')

SerialPort.list().then(
ports => ports.forEach((data) => {
    arduinoPort = data.path
}),
err => console.error(err)
).then(()=>{
    var port = new SerialPort(arduinoPort, {baudRate:9600});
    var parser = port.pipe(new Readline({ delimiter: '\r\n' }))
    parser.on('data', data =>{
      console.log(data)
    });
})