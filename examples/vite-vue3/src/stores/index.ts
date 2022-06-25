import { reactive } from 'vue'
// export const foo = 'foo'
// export const bar = 'bar'
// export const id = 1
// export const array = [1, 2, 3, 4]
export let data = reactive({
  value: 1
})

export function addDataValue() {
  data.value++
}
