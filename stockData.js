Here are a few ideas for working with the data:

Write functions to get the averages for the "open", "high", "low", and "close" values for all days.
Write a function to find the highest "high" for all days.
Write a function to find the lowest "low' for all days.
Write a function that produces an array of objects. Each object should include the date, the open, and the close.
Also, you might find the following code useful for getting started:

var days = Object.keys(stocks);
days.forEach(function (day) {
  console.log(stocks[day]);
});

var dataz = days.map(function (day) {
  return stocks[day];
});

