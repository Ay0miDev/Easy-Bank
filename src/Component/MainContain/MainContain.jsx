import React from 'react'
import { iconProducts } from './MainContainDB'
import './MainContain.css'
import MainContainCard from './MainContainCard'


const MainContain = () => {
  return (
    <div className='Container'>
        <main className='mainContainer'>
            <section className='mainContainerContent'>
                <div className='upperMain'>
                    <h2 id='easyBankHead'>Why choose Easybank?</h2>
                    <h3 id='easyBankParagraph'>We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.</h3>
                </div>
                <div className='lowerMain'>
                    {iconProducts.map((iconProduct) =>(
                        <MainContainCard
                        key={iconProduct.id}
                        icon={iconProduct.icon}
                        category={iconProduct.category}
                        description={iconProduct.description}/>
                    ))}
                </div>
            </section>
        </main>
    </div>
  )
}

export default MainContain