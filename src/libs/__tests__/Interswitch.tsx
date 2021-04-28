import React from 'react'
import Interswitch from '../InterswitchPay'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { params } from '../test-params'
describe('<Interswitch />', () => {
  afterAll(() => {
    cleanup()
    document.body.innerHTML = ''
  })

  it('renders payment button', () => {
    const content = <Interswitch {...params} />

    const { getByText }: any = render(content)
    fireEvent.click(getByText('Pay Now'))
  })
})
