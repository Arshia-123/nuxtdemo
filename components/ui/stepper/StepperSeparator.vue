<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue'
import type { StepperSeparatorProps } from 'radix-vue'
import { StepperSeparator, useForwardProps } from 'radix-vue'

import { cn } from '@/lib/utils'

const props = defineProps<StepperSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperSeparator
    v-bind="forwarded"
    :class="cn(
      'bg-slate-100 dark:bg-slate-800',
      // Disabled
      'group-data-[disabled]:bg-slate-100 group-data-[disabled]:opacity-50 dark:group-data-[disabled]:bg-slate-800',
      // Completed
      'group-data-[state=completed]:bg-slate-900 dark:group-data-[state=completed]:bg-slate-50',
      props.class,
    )"
  />
</template>
