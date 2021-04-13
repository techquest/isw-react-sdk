// import { useEffect } from 'react'
import useScript from './useScript'
import { IInterswitch } from './interface'

interface _Window extends Window {
  webpayCheckout: (paymentOptions: any) => void
}

declare var window: _Window

export default function useInterswitch(paymentOptions: IInterswitch) {
  const [loaded, error] = useScript(paymentOptions.mode)

  function initializePayment(): void {
    if (error) {
      console.error('Could not load Interswitch inline payment method')
    }

    if (!paymentOptions.reference || paymentOptions.reference.length < 6) {
      console.error(
        'Reference is required and must be at least 6 characters long'
      )
    }

    if (!paymentOptions.merchantCode) {
      console.error('Merchant code is required')
    }

    if (!paymentOptions.payItemID) {
      console.error('Pay Item ID is required')
    }

    if (!paymentOptions.redirectURL) {
      console.error('Redirect URL is required')
    }

    if (!paymentOptions.callback) {
      console.error('Callback is required')
    }

    if (loaded) {
      const _paymentOptions = {
        merchant_code: paymentOptions.merchantCode,
        pay_item_id: paymentOptions.payItemID,
        amount: paymentOptions.amount,
        site_redirect_url: paymentOptions.redirectURL,
        onComplete: paymentOptions.callback,
        mode: paymentOptions.mode || 'TEST',
        txn_ref: paymentOptions.reference,
        currency: paymentOptions.currency || '566',
        pay_item_name: paymentOptions.payItemName,
        cust_name: paymentOptions.customerName,
        cust_email: paymentOptions.customerEmail,
        cust_id: paymentOptions.customerID
      }
      window.webpayCheckout(_paymentOptions)
    }
  }

  return initializePayment
}
