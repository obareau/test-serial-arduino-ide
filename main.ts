serial.onDataReceived("r", function () {
    serial.writeLine("\"Hello World\"")
    basic.pause(500)
})
led.enable(false)
