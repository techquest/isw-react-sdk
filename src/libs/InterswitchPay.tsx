import React from 'react'
import { IInterswitch } from './interface'
import useInterswitch from './useInterswitch'

const InterswitchPay = (paymentParameters: IInterswitch): JSX.Element => {
  const initializePayment = useInterswitch(paymentParameters)
  return (
    <button
      className={paymentParameters.className}
      style={paymentParameters.style}
      onClick={() => initializePayment()}
    >
      {paymentParameters.text || paymentParameters.children}
    </button>
  )
}

export default InterswitchPay
