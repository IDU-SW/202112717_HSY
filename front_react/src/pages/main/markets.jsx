import { useEffect } from 'react';
import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { swapMarkets } from '../../reducers'

export const Markets = () => {

    const { markets } = useSelector( state => state.markets )
    const dispatch = useDispatch()
    

    useEffect( () => {
        
            fetch('http://localhost:3001/markets')
            .then(res => res.json())
            .then(res => {
                dispatch( swapMarkets(res) )
            });
    },new Array())
    const MARKET_TABLE_HEAD = [ 
        { no : 0, name : 'no' }
      , { no : 1, name : 'market' }
      , { no : 2, name : 'korean_name' }
      , { no : 3, name : 'english_name' }
      ,
    ]
    return (

        <div className = 'Markets'>
            <Table responsive>
                <thead>
                    <tr>
                    {
                        MARKET_TABLE_HEAD.map( head => {
                            return <th key = {head.no}>{head.name}</th>
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        markets.map( market => (
                            <tr key={market.marketSqno}>
                                <td>{market.marketSqno}</td>
                                <td>{market.market}</td>
                                <td>{market.koreanName}</td>
                                <td>{market.englishName}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </Table>
        </div>
    )
}