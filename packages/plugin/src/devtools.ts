import type { App } from '@vue/devtools-api'
import { setupDevtoolsPlugin } from '@vue/devtools-api'
import { formatStoreToState } from './formatting'

const myState = {
  value: 1,
}

export function setupDevtools(app: App, _options: []) {
  setupDevtoolsPlugin(
    {
      id: 'vite-plugin-vue-store',
      label: 'store',
      packageName: 'vite-plugin-vue-store',
      app,
    },
    (api) => {
      api.addInspector({
        id: 'vue-plugin-vue-store',
        label: '- Store',
        icon: 'storefront',
        noSelectionText: 'storefront',
      })
      api.on.getInspectorTree((payload, _context) => {
        if (payload.inspectorId === 'vue-plugin-vue-store') {
          payload.rootNodes = [
            {
              id: 'root',
              label: '📦 Store(root)',
            },
          ]
        }
      })
      api.on.getInspectorState((payload, _context) => {
        if (payload.inspectorId === 'vue-plugin-vue-store') {
          payload.state = {
            myState: [{
              key: 'value',
              value: myState.value,
              editable: true,
            }],
          }
        }
      })
      api.on.editInspectorState((payload) => {
        if (payload.inspectorId === 'vue-plugin-vue-store') {
          if (payload.nodeId === 'root')
            payload.set(myState, payload.path, payload.state.value)
        }
      })

      // api.sendInspectorState('vue-plugin-vue-store')
    },
  )
}
