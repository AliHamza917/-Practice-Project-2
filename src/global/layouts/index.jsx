import React from 'react'
import HeaderPage from '../components/Header'
import FooterPage from '../components/Footer'

const LayoutPage = ({children}) => {
  return (

    <div>
      <HeaderPage/>
      {children}

      <FooterPage/>
    </div>
  )
}

export default LayoutPage