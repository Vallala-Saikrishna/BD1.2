const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/distance', (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});
app.get('/total-time', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});

app.get('/avg-speed', (req, res) => {
  let totalTime = parseFloat(req.query.totalTime);
  let totalDistance = parseFloat(req.query.totalDistance);
  let avgspeed = totalDistance / totalTime;
  res.send(avgspeed.toString());
});
app.get('/eta', (req, res) => {
  let totalSpeed = parseFloat(req.query.totalSpeed);
  let totalDistance = parseFloat(req.query.totalDistance);
  let timeOfArrival = totalDistance / totalSpeed;
  res.send(timeOfArrival.toString());
});

app.get('/total-calories', (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesBurnedPerMin = parseFloat(req.query.caloriesBurnedPerMin);
  let totalCalories = duration1 * duration2 * caloriesBurnedPerMin;
  res.send(totalCalories.toString());
});

app.get('/interestRate', (req, res) => {
  let principle = parseFloat(req.query.principle);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let interestRate = (principle * rate * time) / 100;
  res.send(interestRate.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
