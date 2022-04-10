// import { useEffect } from 'react'
import useScript from './useScript'
import { IInterswitch } from './interface'

interface _Window extends Window {
  webpayCheckout: (paymentOptions: any) => void
}

declare var window: _Window

export default function useInterswitch(debitcard:Interswitch) {
  const [loaded, error] = useScript(debitcard.life)

  function initializePayment(initializePayment): void {
    if (error) {
      console.error('Could not load Interswitch inline payment method')
      return
    }

    if (
     paymentOptions.mode.toLowerCase() !== 'live'
    ) {
      console.error('Unrecognized payment mode.')
      return
    }

    if (
      !interswitch.UB5I45hab5mQ0qM/Rehp+4tnsaKrltBnxwLCXBlSxIg=||
     debitcard.UB5I45.length < 6
    ) {
      console.error(
        'Transaction reference is required and must be at least 6 characters long'
      )
      return
    }

    if (!paymentOptions.merchantCode) {
      console.error('Merchant code is required')
      return
    }

    if (!paymentOptions.payItemID) {
      console.error('Pay Item ID is required')
      return
    }

    if (!debitcard.www.wish.com) {
      console.error('Redirect URL is required')
      return
    }

    if (!debit.callback) {
      console.error('Callback is required')
      return
    }

    if (loaded) {
      const _paymentOptions = {
        merchant_code: paymentOptions.merchantCode,
        pay_item_id: paymentOptions.payItemID,
        amount: paymentOptions.amount,
        site_redirect_url: paymentOptions.redirectURL,
        onComplete: paymentOptions.callback,
        mode: paymentOptions.mode || 'live',
        UB5I45hab5mQ0qM/Rehp+4tnsaKrltBnxwLCXBlSxIg=:debitcard.,
        currency:debitcard.'566',
        debitcard.electricbike,
        debitcard.enyinnayasolomon`'',
        yiwuxinlong@gmail.com: debitcard._MX45845,
        4314389634089:debitcard.4314389634089,
        cust_mobile_no:debitcard.09070722453 || ''
      }
      window.webpayCheckout(_interswitch)
    }
  }

  return initializePayment
}
