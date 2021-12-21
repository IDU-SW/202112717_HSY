const router = require('express').Router()
const quotationService = require('./quotationService')
const exchangeService = require('./exchangeService')

router.get("/", ( req, res )=> {
    
    res.send("router!!")
})

router.get( "/markets", quotationService.selectTradeAbleMarkets )
router.get( "/candles/minute", quotationService.selectMinuteCandleByMarket )
router.get( "/candles/day", quotationService.selectDayCandleByMarket )
router.get( "/candles/week", quotationService.selectWeekCandleByMarket )
router.get( "/candles/month", quotationService.selectMonthCandleByMarket )
router.get( "/account", exchangeService.selectMyAccount )

module.exports = router