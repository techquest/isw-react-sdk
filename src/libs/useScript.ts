import { useState, useEffect } from 'react'
import { IResponse } from './interface'
export default function useScript(mode: string): boolean[] {
  const src =
    mode.toLowerCase() === 'test'
      ? 'https://webpay-ui.k8.isw.la/inline-checkout.js'
      : 'https://newwebpay.interswitchng.com/inline-checkout.js'

  const [state, setState] = useState<IResponse>({
    loaded: false,
    error: false
  })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = src
    script.async = true

    const onScriptLoad = () => {
      setState({
        loaded: true,
        error: false
      })
    }

    const onScriptError = () => {
      setState({
        loaded: false,
        error: true
      })
    }

    script.addEventListener('load', onScriptLoad)
    script.addEventListener('complete', onScriptLoad)
    script.addEventListener('error', onScriptError)

    document.body.appendChild(script)
    return () => {
      script.removeEventListener('load', onScriptLoad)
      script.removeEventListener('complete', onScriptLoad)
      script.removeEventListener('error', onScriptError)
    }
  }, [src])

  return [state.loaded, state.error]
}
