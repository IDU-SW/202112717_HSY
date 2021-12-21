const fetch = require('node-fetch')

 const selectTradeAbleMarkets = ( req, res ) => {
    
    const url = 'https://api.upbit.com/v1/market/all?isDetails=false';
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(url, options)
    .then(res => res.json())
    .then(json => res.send(json) )
    .catch(err => console.error('error:' + err));
}

const selectMinuteCandleByMarket = ( req, res ) => {

    const unit = req.query.unit && [1, 3, 5, 15, 10, 30, 60, 240].indexOf(req.query.unit) !== -1 ? req.query.unit : 1
    
    const market = `market=${req.query.market ? req.query.market : 'KRW-BTC'}`
    const to = req.query.to ? `&to=${req.query.to}` : ''
    const count = `count=${req.query.count ? req.query.count : 1}`
     
    const url = `https://api.upbit.com/v1/candles/minutes/${unit}?${market}${to}&${count}`;
    
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(url, options)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(err => console.error('error:' + err));
}

const selectDayCandleByMarket = ( req, res ) => {

    const market = `market=${req.query.market ? req.query.market : 'KRW-BTC'}`
    const to = req.query.to ? `&to=${req.query.to}` : ''
    const count = `count=${req.query.count ? req.query.count : 1}`
    const convertingPriceUnit = `convertingPriceUnit=${req.query.convertingPriceUnit ? req.query.convertingPriceUnit : 'KRW'}`
    
    const url = `https://api.upbit.com/v1/candles/days?${market}&${count}${to}&${convertingPriceUnit}`;
    
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(url, options)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(err => console.error('error:' + err));
}

const selectWeekCandleByMarket = ( req, res ) => {

    const market = `market=${req.query.market ? req.query.market : 'KRW-BTC'}`
    const to = req.query.to ? `&to=${req.query.to}` : ''
    const count = `count=${req.query.count ? req.query.count : 1}`
    
    const url = `https://api.upbit.com/v1/candles/weeks?${market}&${count}${to}`;
    
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(url, options)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(err => console.error('error:' + err));
}

const selectMonthCandleByMarket = ( req, res ) => {

    const market = `market=${req.query.market ? req.query.market : 'KRW-BTC'}`
    const to = req.query.to ? `&to=${req.query.to}` : ''
    const count = `count=${req.query.count ? req.query.count : 1}`
    
    const url = `https://api.upbit.com/v1/candles/months?${market}&${count}${to}`;
    
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(url, options)
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(err => console.error('error:' + err));
}

module.exports = {

      selectTradeAbleMarkets
    , selectMinuteCandleByMarket
    , selectDayCandleByMarket
    , selectWeekCandleByMarket
    , selectMonthCandleByMarket
}