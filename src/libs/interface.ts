import React, { ReactNode } from 'react'

export interface IInterswitch {
  merchantCode: string
  payItemID: string
  amount: string
  customerEmail: string
  mode: string
  transactionReference: string
  callback: Function
  currency?: string
  redirectURL?: string
  customerName?: string,
  customerMobileNo?: string,
  customerID?: string
  className?: string
  children?: ReactNode
  payItemName?: string
  text?: string
  style?: React.CSSProperties
}

export interface IResponse {
  loaded: boolean
  error: boolean
}
