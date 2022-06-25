import type { App } from '@vue/devtools-api'
import { setupDevtools } from './devtools'

export default {
  install(app: App, options = {}) {
    setupDevtools(app, options)
  },
}
