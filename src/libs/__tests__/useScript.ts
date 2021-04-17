import { cleanup } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import useScript from '../useScript'
import { params } from '../test-params'
describe('useScript', () => {
  afterEach(() => {
    cleanup()
    document.body.innerHTML = ''
  })

  it('adds the script tag', () => {
    const { result } = renderHook(() => useScript(params.mode))
    expect(result.current[0]).toBe(false)
    expect(result.current[1]).toBe(false)
    expect(document.getElementsByTagName('script')).toBeDefined()
  })

  it('loads interswitch inline script without error', () => {
    const { result } = renderHook(() => useScript(params.mode))
    expect(document.getElementsByTagName('script').length).toBe(1)
  })
})
