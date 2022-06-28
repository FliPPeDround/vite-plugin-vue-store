import { describe, expect, it } from 'vitest'
import { formatStateToReactiveType, formatStoreToState } from './../src/formatting'

describe('test test', () => {
  it('This is test', () => {
    expect(formatStoreToState()).toMatchInlineSnapshot(`
      [
        {
          "editable": true,
          "key": "data",
          "objectType": "Reactive",
          "type": "object",
          "value": {
            "num": 2,
            "value": 1,
          },
        },
        {
          "editable": true,
          "key": "foo",
          "objectType": "Ref",
          "type": "object",
          "value": 1,
        },
        {
          "editable": false,
          "key": "addDataValue",
          "objectType": "Function",
          "type": "function",
          "value": "function addDataValue() {
        data.value++;
      }",
        },
        {
          "editable": false,
          "key": "bar",
          "objectType": "Computed",
          "type": "object",
          "value": 2,
        },
      ]
    `)
  })
  it('should classification', () => {
    expect(formatStateToReactiveType(formatStoreToState()))
      .toMatchInlineSnapshot(`
        {
          "Computed": [
            {
              "editable": false,
              "key": "bar",
              "objectType": "Computed",
              "type": "object",
              "value": 2,
            },
          ],
          "Function": [
            {
              "editable": false,
              "key": "addDataValue",
              "objectType": "Function",
              "type": "function",
              "value": "function addDataValue() {
          data.value++;
        }",
            },
          ],
          "Reactive": [
            {
              "editable": true,
              "key": "data",
              "objectType": "Reactive",
              "type": "object",
              "value": {
                "num": 2,
                "value": 1,
              },
            },
          ],
          "Ref": [
            {
              "editable": true,
              "key": "foo",
              "objectType": "Ref",
              "type": "object",
              "value": 1,
            },
          ],
        }
      `)
  })
})
