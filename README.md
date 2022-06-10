

## react-sensor-meters

Meter-like components for building homemade dashboards for your data loggers.

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/allMeters.png?raw=true)



##Install
`npm install react-sensor-meters`

#####Import Example

```javascript
import { TempSimple, Battery, HumidityDropPercent } from "react-sensor-meters";
```

_Possible values for import: _

- TempLines
- TempRound
- TempSimple
- H20Drop
- WaterPlant
- LightThick
- HumidityDropPercent
- AirQualityMask
- AirQualityVent
- Battery
- CarBattery
- BasicCircle
- BasicRectangle

#####Props (\*_ in Prop Name = required _)

| Prop Name          | Value Type | Description                                                             | Possible Values                          | Examples                            |
| ------------------ | ---------- | ----------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------- |
| data\*             | Number     | Value to be displayed.                                                  | Any Number                               | 58                                  |
| topEndDataLimit \* | Number     | Max value of data.                                                      | Any Number                               | 1000                                |
| animate            | Boolean    | Animates the fill of the meter.                                         | true/false                               | true                                |
| neon               | String     | Removes backfill on meter leaving only outline.                         | null, border, noBorder                   | "border"                            |
| fillColor          | String     | Color of the fill.                                                      | Any string that can translate to a color | "grey" or "#ffff" or"rgba(1,1,1,1)" |
| highFillColor      | String     | Use with highFillThreshhold. Changes fill color after a certian amount. | Any string that can translate to a color | “grey” or “#ffff” or”rgba(1,1,1,1)” |
| highFillThreshold  | Number     | Use with highFillColor. Sets the threshhold for fill color change.      | Any number                               | 90                                  |
| backFillColor      | String     | Back fill color of meter.                                               | Any string that can translate to a color | “grey” or “#ffff” or”rgba(1,1,1,1)” |
| dotColor           | String     | Special features of meter that do not fill (not all meters have one).   | Any string that can translate to a color | “grey” or “#ffff” or”rgba(1,1,1,1)” |
| gaugeSize          | String     | Sets the size of the meter.                                             | small,medium,large                       | medium                              |
| valueColor         | String     | Changes the color of the value displayed.                               | Any string that can translate to a color | "grey” or “#ffff” or”rgba(1,1,1,1)” |
| labelColor         | String     | Changes the color of the label text.                                    | Any string that can translate to a color | "grey” or “#ffff” or”rgba(1,1,1,1)” |
| cardColor          | String     | Changes the color of the div the gauge is on.                           | Any string that can translate to a color | "grey” or “#ffff” or”rgba(1,1,1,1)” |
| hover              | Boolean    | On hover it increases meter size.                                       | true/false                               | true                                |
| labelText          | String     | Text to be displayed under meter.                                       | Any string value                         | "Garage" or "Family Room"           |
| borderColor        | String     | Color of the border of meter.                                           | Any string that can translate to a color | “grey” or “#ffff” or”rgba(1,1,1,1)” |

Default colors are black on white if only using the required props.

image of prop on meter here!!!!!!!!!!!!!!!!!

## _Meters_

#####TempLines

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/tempLines.png?raw=true)

---

#####TempRound

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/tempRound.png?raw=true)


---

#####TempSimple

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/tempSimple.png?raw=true)

---

#####H20Drop
!!!! IMPORTANT !!!!!: Water detecting sensors work on an inverse. The higher the number means there is no presense of water. The lower the number means more of a presense of water. This corresponds to the resistance of the sensor.

This component operates on that principal. Give it a higher number, the meter will have low fill. Give it a lower number the meter will have more fill.


![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/h20Drop.png?raw=true)

---

#####WaterPlant
!!!! IMPORTANT !!!!!: Water detecting sensors work on an inverse. The higher the number means there is no presense of water. The lower the number means more of a presense of water. This corresponds to the resistance of the sensor.

This component operates on that principal. Give it a higher number, the meter will have low fill. Give it a lower number the meter will have more fill.

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/waterPlant.png?raw=true)

---

#####LightThick

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/thickLight.png?raw=true)

---

#####HumidityDropPercent

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/humidityDropPercent.png?raw=true)

---

#####AirQualityMask

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/airQualityMask.png?raw=true)

---

#####AirQualityVent

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/airQualityVent.png?raw=true)

---

#####Battery

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/battery.png?raw=true)

---

#####CarBattery

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/carbattery.png?raw=true)

---

#####BasicCircle

![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/basicCircle.png?raw=true)

---

#####BasicRectangle
![alt text](https://github.com/chrismilheim/react-sensor-meters/blob/main/components/img/basicRectangle.png?raw=true)

---
