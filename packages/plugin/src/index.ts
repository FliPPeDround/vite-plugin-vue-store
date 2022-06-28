import type { App } from '@vue/devtools-api'
import type { SetStoresOptions } from './types'
import { setupDevtools } from './devtools'

export default {
  install(app: App, options: SetStoresOptions) {
    setupDevtools(app, options)
  },
}
