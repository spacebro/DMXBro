const spacebroClient = require('spacebro-client')

var actionList = [
  {
    name: 'DMX-data',
    trigger: function (data) {
      console.log(data)
    }
  }
]

// spacebroClient.iKnowMyMaster('127.0.0.1', '8888')
spacebroClient.registerToMaster(actionList, 'sendDmx')

setTimeout(function () {
  for (var i = 1; i <= 255; i++) {
    spacebroClient.emit('DMX-data', {channel: i, level: 0})
  }
  setTimeout(function () {
    console.log('stopDmx.js - I\'m done here. My people needs me. Bye.')
    process.exit(0)
  }, 2000)
}, 3000)
