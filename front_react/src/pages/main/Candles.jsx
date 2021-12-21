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
    const selectCandles = () => {

        const REST_SERVER_URL = 'http://localhost:3001/candles'
        const url = `${REST_SERVER_URL}/${candleKind}?market=${market}${ to ? `to=${to}` : ''}${ candleKind === 'Minute' ? `&unit=${unit}` : ''}`
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
    }
    const selectUnit = (unit) => {

        setUnit(unit)
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
    return (

        <div className = 'Candles'>
            <Form.Control style={{'display':'inline', 'width':'15%'}} type="text" placeholder="searchMarket" onKeyUp = {e => filterMarkets(e.target.value) } />
            <DropdownButton className = 'm-1' style={{'display':'inline'}} title={market}>
                { markets.map( market => <Dropdown.Item key={market.marketSqno} onClick={ () => selectMarket(market.market)}>{market.market}({market.koreanName})</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton className = 'm-1' style={{'display':'inline'}} title={candleKind}>
                { CANDLE_KINDS.map( candleKind => <Dropdown.Item key={candleKind} onClick={ () => selectCandleKind(candleKind)}>{candleKind}</Dropdown.Item>)}
            </DropdownButton>
            { candleKind === 'Minute' ? 
                <DropdownButton className = 'm-1'style={{'display':'inline'}} title={unit}>
                    { UNITS.map( unit => <Dropdown.Item key={unit} onClick={()=>selectUnit(unit)}>{unit}</Dropdown.Item>)}
                </DropdownButton> : ''
            }
            <Button className = 'm-1' onClick = { () => {selectCandles()}}>search</Button>
            <Button className = 'm-1 btn-success' onClick = { () => {initComponent()}}>init</Button>
            
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
                            <tr key={index}>
                                <td>{index}</td>
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