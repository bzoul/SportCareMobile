function scan() {
  let noble = require('noble-mac');
  noble.on('stateChange', function (state) {
    if (state === 'poweredOn') {
      noble.startScanning(["180d"]);
    } else {
      noble.stopScanning();
    }
  });

}



function connectAndSetUp(peripheral) {
  noble.on('discover', function (peripheral) {
    noble.stopScanning();
    peripheral.connect(function (error) {
      let serviceUUID = ["180d"];
      let characteristicUUID = ["2a37"];
      peripheral.discoverSomeServicesAndCharacteristics(serviceUUID, characteristicUUID, function (error, services, characteristics) {
        characteristics[0].notify(true, function (error) {
          characteristics[0].on('data', function (data, isNotification) {
            console.log('length: ' + data.length);
            console.log('flags: ' + data[0]);
            console.log('bpm: ' + data[1]);
            let i;
            let RRITxt = '';
            for (i = 2; i < data.length; i += 2) {
              RRITxt += ' ' + (data[i] + 256 * data[i + 1]);
            }
            console.log(RRITxt)
            scan();
          });
        },
        )
      });
    });
  });
}