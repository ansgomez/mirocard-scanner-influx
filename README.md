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
$ cd mirocard-scanner-influx
$ npm install @abandonware/noble
$ npm install @ansgomez/node-beacon-scanner
$ npm install --save influx
```
---------------------------------------
## Quick Start

The script `influx-bridge.js` starts scanning and stores the parsed packets in an InfluxDB database.

Note: `writePoints()` currently uses the hard-coded database `mirocard_temp` and
measurement `temp_rh`, so change those as well if you rename them below.

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

The script will output the result as follows:

```
MAC: 60:77:71:57:19:0a
Temperature: 23.24
Humidity: 33.80
RSSI: -87
Added to InfluxDB
...
```

## MiroCard project

The MiroCard is a batteryless, light-powered BLE smart card, designed by Andres Gomez
(Miromico AG) and inspired by the
[Transient BLE Node](https://gitlab.ethz.ch/tec/public/employees/sigristl/transient_ble_node)
project developed at ETH Zurich. It was presented in:

> Andres Gomez. 2020. *Demo Abstract: On-Demand Communication with the Batteryless MiroCard.*
> In The 18th ACM Conference on Embedded Networked Sensor Systems (SenSys '20).
> [doi:10.1145/3384419.3430440](https://doi.org/10.1145/3384419.3430440)

Related repositories:

| Repository | Contents |
| --- | --- |
| [mirocard-hardware](https://github.com/ansgomez/mirocard-hardware) | Hardware: datasheet, schematics and Altium PCB project (MiroCard V2.0) |
| [mirocard-contiki-ng](https://github.com/ansgomez/mirocard-contiki-ng) | Firmware: Contiki-NG fork with the MiroCard platform and example applications |
| [miroreader-app](https://github.com/ansgomez/miroreader-app) | Android app to receive and display MiroCard beacons |
| [mirocard-scanner-python](https://github.com/ansgomez/mirocard-scanner-python) | Python scripts to scan for and decode MiroCard beacons (bluepy) and discover devices (gattlib) |
| [mirocard-scanner-mqtt](https://github.com/ansgomez/mirocard-scanner-mqtt) | Node.js bridge forwarding MiroCard beacons to an MQTT broker |
| **mirocard-scanner-influx** (this repository) | Node.js bridge storing MiroCard beacons in InfluxDB |
| [mirocard-webid](https://github.com/ansgomez/mirocard-webid) | Web Bluetooth demo page for identification and sensor readout |
| [mirocard-postprocessing](https://github.com/ansgomez/mirocard-postprocessing) | Jupyter notebook to post-process RocketLogger power measurements |
| [mirocard-plotly](https://github.com/ansgomez/mirocard-plotly) | Plotly Dash web app visualizing a RocketLogger measurement |

## License

BSD-3-Clause. Copyright (c) 2021, Andres Gomez. See [LICENSE](LICENSE).
