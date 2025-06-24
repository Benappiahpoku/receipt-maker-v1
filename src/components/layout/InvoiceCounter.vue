<!--
  InvoiceCounter.vue
  - Modern, simple counter for total invoices generated (downloads + shares).
  - Uses Firestore for real-time updates via useInvoiceCounter composable.
  - Mobile-first, touch-friendly, and matches Stratonea design system.
  - Clear comments for learning and maintainability.
-->

<template>
    <div class="flex justify-center my-8">
        <div class="
          px-6 py-4
          bg-gradient-to-r from-primary/5 to-primary/10
          rounded-xl shadow-sm
          transition-all duration-300 hover:shadow-md
          border border-primary/10
          w-full max-w-md
        ">
            <p class="text-gray-700 flex items-center gap-2 text-base sm:text-lg">
                <!-- Modern document icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary/70 flex-shrink-0" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <!-- Modern, simple sentence -->
                <span>
                    <strong class="text-primary font-semibold">{{ formattedCount }}</strong>
                    invoices already generated and counting
                </span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
// ===== File-Level Documentation =====
// InvoiceCounter.vue: Modern, simple counter for total invoices generated.
// - Uses Firestore for real-time updates via useInvoiceCounter composable.
// - Mobile-first, touch-friendly, and matches Stratonea design system.
// - Clear comments for learning and maintainability.

// ===== Imports =====
import { ref, onMounted } from 'vue'
import { useInvoiceCounter } from '@/composables/useInvoiceCounter'

// ===== Main Logic =====
/**
 * useInvoiceCounter composable provides:
 * - subscribeToInvoiceCount: (cb: (count: number) => void) => void
 *   (does NOT return an unsubscribe function)
 */
const { subscribeToInvoiceCount } = useInvoiceCounter()

/**
 * formattedCount: String with thousands separator for display.
 * Defaults to '...' while loading.
 */
const formattedCount = ref('...')

/**
 * On mount, subscribe to Firestore invoice count updates.
 * No unsubscribe needed since subscribeToInvoiceCount returns void.
 */
onMounted(() => {
    subscribeToInvoiceCount((newCount: number) => {
        formattedCount.value = newCount.toLocaleString()
    })
})
</script>