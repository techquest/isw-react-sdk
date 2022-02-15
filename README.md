# react-interswitch

[![Issues](	https://img.shields.io/github/issues/techquest/isw-react-sdk)](https://github.com/techquest/isw-react-sdk/issues)
[![Forks](	https://img.shields.io/github/forks/techquest/isw-react-sdk)](https://github.com/techquest/isw-react-sdk/network/members)
[![Stars](	https://img.shields.io/github/stars/techquest/isw-laravel-sdk)](https://github.com/techquest/isw-react-sdk/stargazers)

> Interswitch's official react package to easily integrate to Quickteller Business to recieve payments.
To begin, create an account at https://business.quickteller.com if you haven't already.

## Installation
To install, run:
```bash
npm install react-interswitch
```

## Usage
Create your component like so:
```js
import React from 'react'

import { InterswitchPay } from 'react-interswitch'

const App = () => {
  const paymentParameters = {
    merchantCode: 'XXXXXXX',
    payItemID: 'XXXXXXXXXXXX',
    customerEmail: 'johndoe@gmail.com',
    redirectURL: 'http://localhost:3000',
    text: 'Pay Now',
    mode: 'TEST',
    transactionReference: Date.now().toString(),
    amount: '10000',
    style: {
        width: '200px',
        height: '40px',
        border: 'none',
        color: '#fff',
        backgroundColor: '#ff0000'
    },
    callback: (response) => {
      console.log('response: ', response)
    }
  }
  return <InterswitchPay {...paymentParameters} />
}

export default App
```
**Note:**
 - **merchantCode** and **payItemID** can be gotten on your [Quickteller Business dashboard](https://business.quickteller.com/developertools)
 - **amount** must be in kobo



## Parameters
Below is a list of all the supported parameters.

| Parameters           | Data Type                 | Required | Description                                                                                                                                                                                                                                         |
|----------------------|---------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| merchantCode         | string                   | true     | This can be found on your dashboard.
| payItemID            | string                   |  true    | This can be found on your dashboard.
| customerEmail        | string                   | true     | The email of the person making the payment.                                                                                                                                                                                                         |
| amount               | string                    | true     | The cost of the item being paid for in kobo.                                                                                                                                                                                                        |
| transactionReference | string                    | true    | This is a unique reference string required for every transaction. You can create a method to generate this. |
| text      | string                    |  true   |  This represents the text on the payment button.
| mode      | string                    | true    | This represents your integration mode. It can be 'TEST' or 'LIVE'.
| callback  | function                  | true    | This function is called after every transaction.
| redirectURL | string                  | false   | The url you want the user to be redirected to after a transaction.
| currency             | string                    | false    | The ISO code of the currency being used. If this field is not added, the currency naira is assumed.                                                                                                                                                 |
| customerName         | string                    | false    | The name of the person making the payment.                                                                                                                                                                                                          |
| customerID           | string                    | false    | The ID of the person making the payment.                                                                                                                                                                                                            |
| customerMobileNo           | string                    | false    | The mobile number of the person making the payment.                                                                                                                                                                                                            |
|payItemName            | string                    | false   | The name of the item being paid for. |                                                                                   |                                                                                     |
| className             | string                    | false   | You can use this to add a CSS class to the payment button.
|  style                | object                    | false    | You can use this to add inline styles to the payment button.

After a transaction, a sample response from the callback function will be like so:
```js
{
    amount: 10000,
    apprAmt: 10000,
    cardNum: "",
    desc: "Approved by Financial Institution",
    mac: "",
    payRef: "FBN|WEB|MX26070|13-04-2021|3512130|866194",
    resp: "00",
    retRef: "000106923853",
    txnref: "1618305656700",
    url: "http://localhost:3000",
}
```
**NOTE:**
The key 'resp' gives the final status of the transaction.  
There are quite a number of response codes that can be returned, the full list can be viewed [here](https://sandbox.interswitchng.com/docbase/docs/webpay/response-codes/)

## - Handling the Response 
For integrity purpose, you are advised to make a server side request to get the final status of a transaction before giving value.
To do this, make a post request to the endpoint below:
##### Test mode: #####
https://qa.interswitchng.com/collections/api/v1/gettransaction.json?merchantcode={MERCHANT_CODE}&transactionreference={TRANSACTION_REFERENCE}&amount={AMOUNT_IN_KOBO}
##### Live mode: #####
https://webpay.interswitchng.com/collections/api/v1/gettransaction.json?merchantcode={MERCHANT_CODE}&transactionreference={TRANSACTION_REFERENCE}&amount={AMOUNT_IN_KOBO}



 ## License 
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.






