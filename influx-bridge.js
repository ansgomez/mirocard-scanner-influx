const BeaconScanner = require('@ansgomez/node-beacon-scanner');
const scanner = new BeaconScanner();

//INFLUXDB CONNECTION VARIABLES
influx_host = "localhost";
influx_database = "mirocard_temp";
influx_measurement = 'temp_rh';

//Connext to Influx
const Influx = require("influx");
const influx = new Influx.InfluxDB({
  host: influx_host,
  database: influx_database,
  schema: [
      {
          measurement: influx_measurement,
          fields: { temp: Influx.FieldType.FLOAT, rh: Influx.FieldType.FLOAT },
          tags: [ 'mirocard_mac' ]
      }
  ]
});

//Add DB if it doesn't exist
influx.getDatabaseNames()
.then(names=>{
if(!names.include('mirocard_temp')){
return influx.createDatabase('mirocard_temp');
}
});

// Set an Event handler for beacons
scanner.onadvertisement = (ad) => {
  // Print full payload
  // console.log(JSON.stringify(ad, null, '  '));
  // console.log(ad.mirocard.ad.manufacturerData);

  // Print MiroCard Sensor Data
  console.log("");
  console.log("MAC: "+ad.address);
  console.log("Temperature: "+ad.mirocard.temp);
  console.log("Humidity: "+ad.mirocard.rh);
  console.log("RSSI: "+ad.rssi);
  const timestamp = Date.now();

  const data = [];
  data.push({
    measurement: "temp_rh",
    tags: { mirocard_mac: ad.address },  
    fields: { temp: ad.mirocard.temp, rh: ad.mirocard.rh}   
  });

  influx.writePoints(data,  {
    database: 'mirocard_temp',
    precision: 's',
  }).then(() => console.log("Added to InfluxDB"), (e) => console.error(e));
};

// Start scanning
scanner.startScan().then(() => {
  console.log('Started to scan.')  ;
}).catch((error) => {
  console.error(error);
});


