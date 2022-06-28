let store: { [x: string]: any }

export async function getStore(path: string) {
  store = path ? await import(`./../../../examples/vite-vue3/src/${path}.ts`) : await import('../../../examples/vite-vue3/src/stores')
  // store = await import('./../../../examples/vite-vue3/src/stores/index')
  // store = await import(path)
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
    Ref: [],
    Reactive: [],
    Computed: [],
    Function: [],
  }
  state.forEach((item) => {
    if (item.objectType === 'Ref')
      r.Ref.push(item)
    if (item.objectType === 'Reactive')
      r.Reactive.push(item)
    if (item.objectType === 'Computed')
      r.Computed.push(item)
    if (item.objectType === 'Function')
      r.Function.push(item)
  })
  return r
}
