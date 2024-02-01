import React from 'react'
import Cards from './Cards'
import './CardList.css'


const   CardList = ({items}) => {
  console.log(items)
  
  return (
    <div className='jobs-cards' >
        {
           items && items.map((dataCard,index)=>{
            return(
              <Cards data={dataCard}/>
            )
                

            })
        }
    </div>
  )
}

export default CardList