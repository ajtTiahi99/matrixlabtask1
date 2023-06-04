import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <h4>{props.item.title}</h4>
      <div className="info">
        <div className='CardValues'>
            <h5 className='key'>Pair created at</h5>
            <span className='value'>{props.item.Pair || props.item.Name || props.item.PNative}</span>
        </div>
        <div className='CardValues'>
            {props.item.title==='Price' ? <>
                <h5 className='key'>Price USD</h5>
                <span className='value'>{props.item.PUSD}</span>
            </> : 
                <h5 className='key'>Symbol</h5>
            }
            <span className='value'>{props.item.Symbol}</span>
        </div>
        <div className='CardValues'>
            {props.item.title==='Basic Info' && <>
                    <h5 className='key'>Dex ID</h5>
                    <span className='value'>{props.item.DexID}</span>
                </>
            }
        </div>
        {props.item.title!=='Price' && <div className='CardValues'>
            <h5 className='key'>Address</h5>
            <span className='value'>{props.item.Address}</span>
        </div>}
      </div>
      <div className="bottomcircle"><i class={props.item.icon}></i></div>
    </div>
  )
}

export default Card
