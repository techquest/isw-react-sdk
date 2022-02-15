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
      return
    }

    if (
      paymentOptions.mode.toLowerCase() !== 'test' &&
      paymentOptions.mode.toLowerCase() !== 'live'
    ) {
      console.error('Unrecognized payment mode.')
      return
    }

    if (
      !paymentOptions.transactionReference ||
      paymentOptions.transactionReference.length < 6
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

    if (!paymentOptions.redirectURL) {
      console.error('Redirect URL is required')
      return
    }

    if (!paymentOptions.callback) {
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
        mode: paymentOptions.mode || 'TEST',
        txn_ref: paymentOptions.transactionReference,
        currency: paymentOptions.currency || '566',
        pay_item_name: paymentOptions.payItemName,
        cust_name: paymentOptions.customerName || '',
        cust_email: paymentOptions.customerEmail,
        cust_id: paymentOptions.customerID,
        cust_mobile_no: paymentOptions.customerMobileNo || ''
      }
      window.webpayCheckout(_paymentOptions)
    }
  }

  return initializePayment
}
