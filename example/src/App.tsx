import React from 'react'

import { Interswitch } from 'react-interswitch'
import 'react-interswitch/dist/index.css'

const App = () => {
  const props = {
    merchantCode: 'MX26070',
    payItemID: 'Default_Payable_MX26070',
    customerEmail: 'toyosi@gmail.com',
    redirectURL: 'http://localhost:3000',
    text: 'Pay Now',
    mode: 'TEST',
    reference: Date.now().toString(),
    amount: '10000',

    payItemName: 'Suya',
    customerName: 'Toyosi Oyelayo',
    customerID: '1',
    className: 'btn',
    currency: '566',
    style: {
      backgroundColor: 'red'
    },
    callback: (response: any) => {
      console.log('hh: ', response)
    }
  }
  return <Interswitch {...props} />
}

export default App
