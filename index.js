var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

console.log('app running on port 5000');

app.get('/', function(req, res) {
    console.log('/home');
    res.render('pages/index');
});

var query = {
 "query": {
  "count": 2,
  "created": "2017-01-31T20:46:50Z",
  "lang": "en-US",
  "diagnostics": {
   "url": [
    {
     "execution-start-time": "0",
     "execution-stop-time": "1",
     "execution-time": "1",
     "content": "http://datatables.org/alltables.env"
    },
    {
     "execution-start-time": "1",
     "execution-stop-time": "2",
     "execution-time": "1",
     "content": "http://www.datatables.org/yahoo/finance/yahoo.finance.quotes.xml"
    },
    {
     "execution-start-time": "6",
     "execution-stop-time": "16",
     "execution-time": "10",
     "content": "http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=YHOO,GOOG"
    }
   ],
   "publiclyCallable": "true",
   "cache": {
    "execution-start-time": "4",
    "execution-stop-time": "5",
    "execution-time": "1",
    "method": "GET",
    "type": "MEMCACHED",
    "content": "5d1e1de680846a307c9874dc3d6878dc"
   },
   "query": {
    "execution-start-time": "5",
    "execution-stop-time": "16",
    "execution-time": "11",
    "params": "{url=[http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=YHOO,GOOG]}",
    "content": "select * from csv where url=@url and columns='Ask,AverageDailyVolume,Bid,AskRealtime,BidRealtime,BookValue,Change&PercentChange,Change,Commission,Currency,ChangeRealtime,AfterHoursChangeRealtime,DividendShare,LastTradeDate,TradeDate,EarningsShare,ErrorIndicationreturnedforsymbolchangedinvalid,EPSEstimateCurrentYear,EPSEstimateNextYear,EPSEstimateNextQuarter,DaysLow,DaysHigh,YearLow,YearHigh,HoldingsGainPercent,AnnualizedGain,HoldingsGain,HoldingsGainPercentRealtime,HoldingsGainRealtime,MoreInfo,OrderBookRealtime,MarketCapitalization,MarketCapRealtime,EBITDA,ChangeFromYearLow,PercentChangeFromYearLow,LastTradeRealtimeWithTime,ChangePercentRealtime,ChangeFromYearHigh,PercebtChangeFromYearHigh,LastTradeWithTime,LastTradePriceOnly,HighLimit,LowLimit,DaysRange,DaysRangeRealtime,FiftydayMovingAverage,TwoHundreddayMovingAverage,ChangeFromTwoHundreddayMovingAverage,PercentChangeFromTwoHundreddayMovingAverage,ChangeFromFiftydayMovingAverage,PercentChangeFromFiftydayMovingAverage,Name,Notes,Open,PreviousClose,PricePaid,ChangeinPercent,PriceSales,PriceBook,ExDividendDate,PERatio,DividendPayDate,PERatioRealtime,PEGRatio,PriceEPSEstimateCurrentYear,PriceEPSEstimateNextYear,Symbol,SharesOwned,ShortRatio,LastTradeTime,TickerTrend,OneyrTargetPrice,Volume,HoldingsValue,HoldingsValueRealtime,YearRange,DaysValueChange,DaysValueChangeRealtime,StockExchange,DividendYield'"
   },
   "javascript": {
    "execution-start-time": "4",
    "execution-stop-time": "28",
    "execution-time": "24",
    "instructions-used": "121798",
    "table-name": "yahoo.finance.quotes"
   },
   "user-time": "30",
   "service-time": "13",
   "build-version": "2.0.84"
  },
  "results": {
   "quote": [
    {
     "symbol": "YHOO",
     "Ask": "44.07",
     "AverageDailyVolume": "9909960",
     "Bid": "44.06",
     "AskRealtime": null,
     "BidRealtime": null,
     "BookValue": "32.39",
     "Change_PercentChange": "+0.14 - +0.32%",
     "Change": "+0.14",
     "Commission": null,
     "Currency": "USD",
     "ChangeRealtime": null,
     "AfterHoursChangeRealtime": null,
     "DividendShare": null,
     "LastTradeDate": "1/31/2017",
     "TradeDate": null,
     "EarningsShare": "-0.23",
     "ErrorIndicationreturnedforsymbolchangedinvalid": null,
     "EPSEstimateCurrentYear": "0.66",
     "EPSEstimateNextYear": "0.69",
     "EPSEstimateNextQuarter": "0.15",
     "DaysLow": "43.67",
     "DaysHigh": "44.14",
     "YearLow": "26.15",
     "YearHigh": "45.00",
     "HoldingsGainPercent": null,
     "AnnualizedGain": null,
     "HoldingsGain": null,
     "HoldingsGainPercentRealtime": null,
     "HoldingsGainRealtime": null,
     "MoreInfo": null,
     "OrderBookRealtime": null,
     "MarketCapitalization": "42.25B",
     "MarketCapRealtime": null,
     "EBITDA": "311.80M",
     "ChangeFromYearLow": "17.92",
     "PercentChangeFromYearLow": "+68.53%",
     "LastTradeRealtimeWithTime": null,
     "ChangePercentRealtime": null,
     "ChangeFromYearHigh": "-0.93",
     "PercebtChangeFromYearHigh": "-2.07%",
     "LastTradeWithTime": "3:31pm - <b>44.07</b>",
     "LastTradePriceOnly": "44.07",
     "HighLimit": null,
     "LowLimit": null,
     "DaysRange": "43.67 - 44.14",
     "DaysRangeRealtime": null,
     "FiftydayMovingAverage": "41.03",
     "TwoHundreddayMovingAverage": "41.40",
     "ChangeFromTwoHundreddayMovingAverage": "2.67",
     "PercentChangeFromTwoHundreddayMovingAverage": "+6.45%",
     "ChangeFromFiftydayMovingAverage": "3.04",
     "PercentChangeFromFiftydayMovingAverage": "+7.41%",
     "Name": "Yahoo! Inc.",
     "Notes": null,
     "Open": "43.78",
     "PreviousClose": "43.93",
     "PricePaid": null,
     "ChangeinPercent": "+0.32%",
     "PriceSales": "8.15",
     "PriceBook": "1.36",
     "ExDividendDate": null,
     "PERatio": null,
     "DividendPayDate": null,
     "PERatioRealtime": null,
     "PEGRatio": "15.92",
     "PriceEPSEstimateCurrentYear": "65.78",
     "PriceEPSEstimateNextYear": "63.87",
     "Symbol": "YHOO",
     "SharesOwned": null,
     "ShortRatio": "4.33",
     "LastTradeTime": "3:31pm",
     "TickerTrend": null,
     "OneyrTargetPrice": "45.86",
     "Volume": "3823208",
     "HoldingsValue": null,
     "HoldingsValueRealtime": null,
     "YearRange": "26.15 - 45.00",
     "DaysValueChange": null,
     "DaysValueChangeRealtime": null,
     "StockExchange": "NMS",
     "DividendYield": null,
     "PercentChange": "+0.32%"
    },
    {
     "symbol": "GOOG",
     "Ask": "797.17",
     "AverageDailyVolume": "1744940",
     "Bid": "797.06",
     "AskRealtime": null,
     "BidRealtime": null,
     "BookValue": "201.12",
     "Change_PercentChange": "-5.15 - -0.64%",
     "Change": "-5.15",
     "Commission": null,
     "Currency": "USD",
     "ChangeRealtime": null,
     "AfterHoursChangeRealtime": null,
     "DividendShare": null,
     "LastTradeDate": "1/31/2017",
     "TradeDate": null,
     "EarningsShare": "28.18",
     "ErrorIndicationreturnedforsymbolchangedinvalid": null,
     "EPSEstimateCurrentYear": "35.42",
     "EPSEstimateNextYear": "39.29",
     "EPSEstimateNextQuarter": "8.30",
     "DaysLow": "790.52",
     "DaysHigh": "801.25",
     "YearLow": "663.06",
     "YearHigh": "835.77",
     "HoldingsGainPercent": null,
     "AnnualizedGain": null,
     "HoldingsGain": null,
     "HoldingsGainPercentRealtime": null,
     "HoldingsGainRealtime": null,
     "MoreInfo": null,
     "OrderBookRealtime": null,
     "MarketCapitalization": "551.08B",
     "MarketCapRealtime": null,
     "EBITDA": "29.86B",
     "ChangeFromYearLow": "134.11",
     "PercentChangeFromYearLow": "+20.23%",
     "LastTradeRealtimeWithTime": null,
     "ChangePercentRealtime": null,
     "ChangeFromYearHigh": "-38.60",
     "PercebtChangeFromYearHigh": "-4.62%",
     "LastTradeWithTime": "3:31pm - <b>797.17</b>",
     "LastTradePriceOnly": "797.17",
     "HighLimit": null,
     "LowLimit": null,
     "DaysRange": "790.52 - 801.25",
     "DaysRangeRealtime": null,
     "FiftydayMovingAverage": "800.91",
     "TwoHundreddayMovingAverage": "778.69",
     "ChangeFromTwoHundreddayMovingAverage": "18.48",
     "PercentChangeFromTwoHundreddayMovingAverage": "+2.37%",
     "ChangeFromFiftydayMovingAverage": "-3.74",
     "PercentChangeFromFiftydayMovingAverage": "-0.47%",
     "Name": "Alphabet Inc.",
     "Notes": null,
     "Open": "796.86",
     "PreviousClose": "802.32",
     "PricePaid": null,
     "ChangeinPercent": "-0.64%",
     "PriceSales": "6.14",
     "PriceBook": "3.99",
     "ExDividendDate": null,
     "PERatio": "28.29",
     "DividendPayDate": null,
     "PERatioRealtime": null,
     "PEGRatio": "1.21",
     "PriceEPSEstimateCurrentYear": "23.23",
     "PriceEPSEstimateNextYear": "20.29",
     "Symbol": "GOOG",
     "SharesOwned": null,
     "ShortRatio": "1.60",
     "LastTradeTime": "3:31pm",
     "TickerTrend": null,
     "OneyrTargetPrice": "948.44",
     "Volume": "1774084",
     "HoldingsValue": null,
     "HoldingsValueRealtime": null,
     "YearRange": "663.06 - 835.77",
     "DaysValueChange": null,
     "DaysValueChangeRealtime": null,
     "StockExchange": "NMS",
     "DividendYield": null,
     "PercentChange": "-0.64%"
    }
   ]
  }
 }
};

app.get('/stock', function(req, res) {
    https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22GOOG%22)%0A%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=

    var symbol = req.query.symbol;
    var q = query.query.results.quote;
    console.log(q[0]);
    console.log('/stock/' + symbol);
    res.render('pages/stock', {symbol: symbol, q: q});
});

app.post('/question', function(req, res) {
	console.log('/question');

	var question = req.body.question;
	var a = req.body.a;
	var b = req.body.b;
	var c = req.body.c;
	var d = req.body.d;

	res.render('pages/question', {
		q: question,
		a: a,
		b: b,
		c: c,
		d: d
	});
});

app.listen(5000);
