import * as store from './../../../examples/vite-vue3/src/stores'

export function formatStoreToState() {
  const r = []
  for (const i in store) {
    if (typeof store[i] === 'function')
      continue

    r.push({
      type: typeof store[i],
      key: i,
      value: store[i],
      editable: true,
      objectType: 'reactive',
    })
  }

  return r
}