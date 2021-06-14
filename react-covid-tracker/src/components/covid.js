import React, {useEffect, useState} from 'react'
import './covide.css'

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try{
            const ans = await fetch('https://api.covid19india.org/data.json');
            const actualData = await ans.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(() => {
        getCovidData();
    }, [])

  return (
    <>
    <div className='head' style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <h1>LIVE</h1>
        </div>
        
        <div className='head' style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        
        <h2>INDIA COVID-19 TRACKER</h2>
    </div>
    <ul className='tilesWrap'>
        <li className='one'>
            <div className='card'>
                <div className='contentBx'>
                    <p className='size'><span> OUR </span> COUNTRY </p>
                    <p className='color'>INDIA</p>
                </div>
            </div>

        </li>

        <li className='two'>
            <div className='card'>
                <div className='contentBx'>
                    <p className='size'><span> TOTAL </span>RECOVER</p>
                    <p className='color'>{data.recovered}</p>
                </div>
            </div>

        </li>

        <li className='container three'>
            <div className='card'>
                <div className='contentBx'>
                    <p className='size'><span> TOTAL </span>CONFIRM</p>
                    <p className='color'>{data.confirmed}</p>
                </div>
            </div>

        </li>

        <li className='container four'>
            <div className='card'>
                <div className='contentBx'>
                    <p className='size'><span> TOTAL </span> DEATH </p>
                    <p className='color'>{data.deaths}</p>
                </div>
            </div>

        </li>

        <li className='container five'>
            <div className='card'>
                <div className='contentBx'>
                    <p className='size'><span> TOTAL </span> ACTIVE </p>
                    <p className='color'>{data.active}</p>
                </div>
            </div>

        </li>

        <li className='container six'>
            <div className='card'>
                <div className='contentBx'>
                    <p className='size'><span> LAST </span> UPDATE </p>
                    <p className='color'>{data.lastupdatedtime}</p>
                </div>
            </div>

        </li>


    </ul>
    
    
    </>
  )
}

export default Covid