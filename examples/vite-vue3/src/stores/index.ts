import { computed, reactive, ref } from 'vue'
// export const foo = 'foo'
// export const bar = 'bar'
// export const id = 1
// export const array = [1, 2, 3, 4]
export const data = reactive({
  value: 1,
  num: 2,
})

export const foo = ref(1)

export function addDataValue() {
  data.value++
}

export const bar = computed(() => {
  return foo.value * 2
})
