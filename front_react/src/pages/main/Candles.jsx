import { useState } from "react"
import { Table, Button, DropdownButton, Dropdown, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
export const Candles = () => {

    const MARKETS = useSelector( state => state.markets ).markets
    const [ markets, setMarkets] = useState(MARKETS)
    const [ candleKind, setCandleKind ] = useState('Minute')
    const [ candles, setCandles ] = useState([])
    const [ unit, setUnit ] = useState(1)
    const [ to, setTo ] = useState('')
    const [ market, setMarket ] = useState('KRW-BTC')
    const [ count, setCount ] = useState(1)

    const selectCandles = () => {

        const REST_SERVER_URL = `http://localhost:3001/candles/${candleKind}/`
        const MARKET_URL = `?market=${market}`
        const TO_URL = to ? `&to=${to}` : '' 
        const COUNT_URL = `&count=${count}` 
        const UNIT_URL = candleKind === 'Minute' ? `&${unit}` : ''
        
        const url = `${REST_SERVER_URL}${MARKET_URL}${UNIT_URL}${TO_URL}${COUNT_URL}`
        console.log(`>>>>>>>>>>>.${url}`)
        fetch(url)
            .then(res => res.json())
            .then(res => setCandles(res));
    }

    const initComponent = () => {

        setCandleKind('Minute')
        setCandles([])
        setUnit(1)
        setTo('')
        setMarket('KRW-BTC')
        setCount(1)
    }
    const selectUnit = (unit) => {

        setUnit(unit)
    }
    const selectCount = (count) => {

        setCount(count)
    }
    const selectMarket = (market) => {
        
        setMarket(market)
    }
    const filterMarkets = (searchText) => {
        
        setMarkets(MARKETS.filter(market => market.market.toLowerCase().indexOf(searchText.toLowerCase()) !== -1))
    }
    const selectCandleKind = (candleKind) => {

        setCandleKind(candleKind)
    }
    
    const CANDLE_TABLE_HEAD = [ 
          { no : 0, name : 'no' }
        , { no : 1, name : 'market' }  
        , { no : 2, name : 'date_time_utc' }
        , { no : 3, name : 'date_time_kst'}
        , { no : 4, name : 'opening_price' }
        , { no : 5, name : 'high_price' }
        , { no : 6, name : 'trade_price' } 
        , { no : 7, name : 'timestamp' }
        , { no : 8, name : 'acc_trade_price' }
        , { no : 9, name : 'acc_trade_volume' } 
        , { no : 10, name : 'unit' }
    ]
    const CANDLE_KINDS = ['Minute', 'Day', 'Week', 'Month']
    const UNITS = [1, 3, 5, 15, 10, 30, 60, 240]
    const COUNTS = new Array()
    for ( let i = 1; i <= 200; i++ ){

        COUNTS.push(i)
    }
    
    return (

        <div className = 'Candles'>
            this view is Candles({candleKind})<br/>
            <DropdownButton className = 'm-1' style={{'display':'inline'}} title={candleKind}>
                { CANDLE_KINDS.map( candleKind => <Dropdown.Item key={candleKind} onClick={ () => selectCandleKind(candleKind)}>{candleKind}</Dropdown.Item>)}
            </DropdownButton>
            <Form.Control style={{'display':'inline', 'width':'15%'}} type="text" placeholder="searchMarket" onKeyUp = {e => filterMarkets(e.target.value) } />
            <DropdownButton className = 'm-1' style={{'display':'inline'}} title={market}>
                { markets.map( market => <Dropdown.Item key={market.marketSqno} onClick={ () => selectMarket(market.market)}>{market.marketSqno}{market.market}({market.koreanName})</Dropdown.Item>)}
            </DropdownButton>
            
            { candleKind === 'Minute' ?
                    <div style={{'display':'inline'}}>
                        unit :
                        <DropdownButton className = 'm-1'style={{'display':'inline'}} title={unit}>
                            { UNITS.map( unit => <Dropdown.Item key={unit} onClick={()=>selectUnit(unit)}>{unit}</Dropdown.Item>)}
                        </DropdownButton> 
                    </div>            : ''
            }


            
            count :
            <DropdownButton className = 'm-1'style={{'display':'inline'}} title={count}>
                { COUNTS.map( count => <Dropdown.Item key={count} onClick={()=>selectCount(count)}>{count}</Dropdown.Item>)}
            </DropdownButton> 
            
            
            <Button className = 'm-1' onClick = { () => {selectCandles()}}>search</Button>
            <Button className = 'm-1 btn-success' style = {{'float' : 'right'}} onClick = { () => {initComponent()}}>init</Button>
            
            <Table responsive>
                <thead>
                    <tr>
                    {
                        CANDLE_TABLE_HEAD.map( head => {
                            return <th key = {head.no}>{head.name}</th>
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        candles.map( ( candle, index ) => (
                            <tr key={index+1}>
                                <td>{index+1}</td>
                                <td>{candle.market}</td>
                                <td>{candle.candle_date_time_utc}</td>
                                <td>{candle.candle_date_time_kst}</td>       
                                <td>{candle.opening_price}</td>
                                <td>{candle.high_price}</td>
                                <td>{candle.trade_price}</td>
                                <td>{candle.timestamp}</td>
                                <td>{candle.acc_trade_price}</td>
                                <td>{candle.acc_trade_volume}</td>
                                <td>{candles === 'minute' ? candle.unit : '-'}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </Table>
        </div>
    )
}