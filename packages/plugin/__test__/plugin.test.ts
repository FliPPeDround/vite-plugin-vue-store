import { describe, expect, it } from 'vitest'
import { formatStoreToState } from './../src/formatting'

describe('test test', () => {
  it('This is test', () => {
    expect(formatStoreToState()).toStrictEqual(
      [
        {
          key: 'foo',
          value: 'foo',
        },
        {
          key: 'bar',
          value: 'bar',
        },
        {
          key: 'id',
          value: 112,
        },
      ],
    )
  })
})
