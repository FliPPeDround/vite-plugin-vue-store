let store: { [x: string]: any }

export async function getStore(path: string) {
  // path = path ? `./../../../examples/vite-vue3/src/${path}.ts` : '../../../examples/vite-vue3/src/stores'
  // store = await import(path)
  // path = '/Users/flippedround/Desktop/vite-plugin-vue-store/examples/vite-vue3/src/stores/index'
  // store = await import(path)
  // store = await import('./../../../examples/vite-vue3/src/stores/index')
  store = await import('/Users/flippedround/Desktop/vite-plugin-vue-store/examples/vite-vue3/src/stores/index')
}

export function formatStoreToState() {
  const r = []
  for (const i in store) {
    r.push({
      type: typeof store[i],
      key: i,
      value: store[i].__v_isRef
        ? store[i].value
        : store[i],
      objectType: store[i].__v_isRef
        ? store[i]?.effect?.computed ? 'Computed' : 'Ref'
        : typeof store[i] === 'function' ? 'Function' : 'Reactive',
      editable: !(store[i]?.effect?.computed || typeof store[i] === 'function'),
    })
  }

  return r
}

export function formatStoreToEditable() {
  return store
}

export function formatStateToReactiveType(state: any[]) {
  const r = {
    '1.Ref': [],
    '2.Reactive': [],
    '3.Computed': [],
    '4.Function': [],
  }
  state.forEach((item) => {
    if (item.objectType === 'Ref')
      r['1.Ref'].push(item)
    if (item.objectType === 'Reactive')
      r['2.Reactive'].push(item)
    if (item.objectType === 'Computed')
      r['3.Computed'].push(item)
    if (item.objectType === 'Function')
      r['4.Function'].push(item)
  })
  return r
}
