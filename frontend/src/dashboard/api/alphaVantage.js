const API_KEY = "YOUR_API_KEY";

export async function getCandleData(symbol) {

  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}.BSE&apikey=${API_KEY}`
  );

  const json = await res.json();

  const series = json["Time Series (Daily)"];

  if (!series) {
    console.log("No data returned:", json);
    return [];
  }

  const candles = Object.entries(series).map(([date, values]) => ({
    time: date,
    open: Number(values["1. open"]),
    high: Number(values["2. high"]),
    low: Number(values["3. low"]),
    close: Number(values["4. close"]),
  }));

  return candles.reverse();
}