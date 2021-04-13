mirocard-scanner-influx
===============

This repository contains simple Node.js scripts to forward MiroCard beacons to an influxDB database.

## Dependencies

* [Node.js](https://nodejs.org/en/) 6 +
* [@abandonware/noble](https://github.com/abandonware/noble)
* [@ansgomez/node-beacon-scanner](https://github.com/ansgomez/node-beacon-scanner)
* Installed influxDB database

To install, run the following commands:

```
$ git clone https://github.com/ansgomez/mirocard-scanner-influx.git
$ cd mirocard-scanner-mqtt
$ npm install @abandonware/noble
$ npm install @ansgomez/node-beacon-scanner
```
---------------------------------------
## Quick Start

Create a new file inside the `mirocard-scanner` folder and paste the following code.
This sample code shows how to start scanning and store parsed packets in an influx database.

To adjust the connection settings, modify the following lines:

```
influx_host = "localhost";
influx_database = "mirocard_temp";
influx_measurement = 'temp_rh';
```
Once you have updated the values to your database, you can start scanning with the following command:

```
$ sudo node influx-bridge.js
```

The sample code above will output the result as follows:

```
MAC: 60:77:71:57:19:0a
Temperature: 23.24
Humidity: 33.80
RSSI: -87
Added to InfluxDB
...
```