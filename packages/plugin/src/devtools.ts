import type { App } from '@vue/devtools-api'
import { setupDevtoolsPlugin } from '@vue/devtools-api'
import { formatStateToReactiveType, formatStoreToEditable, formatStoreToState, getStore } from './formatting'
import type { SetStoresOptions } from './types'

export async function setupDevtools(app: App, options: SetStoresOptions) {
  await getStore(options?.path)

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
        if (payload.inspectorId === 'vue-plugin-vue-store')
          payload.state = formatStateToReactiveType(formatStoreToState())
      })

      api.on.editInspectorState(async (payload) => {
        if (payload.inspectorId === 'vue-plugin-vue-store') {
          if (payload.nodeId === 'root') {
            const { path, state } = payload
            payload.set(formatStoreToEditable(), path, state.value)
          }
        }
      })

      api.sendInspectorState('vue-plugin-vue-store')
    },
  )
}
