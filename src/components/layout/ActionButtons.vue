<!--
  - ActionButtons.vue: Responsive button group for invoice actions
  - Mobile-first design with vertical stacking on small screens
  - Emits events for parent component to handle core actions
  - Co-exists with ActionHub.vue as an alternative UI component
-->

<template>
  <div class="action-buttons w-full flex justify-center">
    <!-- Mobile-First Button Group -->
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
      <!-- Download Button -->
      <button @click="handleDownload" class="
          flex items-center justify-center gap-2
          px-6 md:px-4 py-3 rounded-lg
          bg-primary text-white
          hover:bg-primary-dark
          active:transform active:scale-95
          transition-all duration-200
          shadow-sm hover:shadow
          min-h-[48px]
        ">
        <font-awesome-icon icon="fa-solid fa-download" />
        <span>Download PDF</span>
      </button>

      <!-- Share WhatsApp Button -->
      <button @click="handleShare" class="
          flex items-center justify-center gap-2
          px-6 md:px-4 py-3 rounded-lg
          bg-green-600 text-white
          hover:bg-green-700
          active:transform active:scale-95
          transition-all duration-200
          shadow-sm hover:shadow
          min-h-[48px]
        ">
        <font-awesome-icon icon="fa-brands fa-whatsapp" />
        <span>Share WhatsApp</span>
      </button>

      <!-- New Invoice Button -->
      <button @click="handleNewInvoice" class="
          flex items-center justify-center gap-2
          px-6 md:px-4 py-3 rounded-lg 
          bg-gray-300 text-primary-700
          hover:bg-gray-200
          active:transform active:scale-95
          transition-all duration-200
          shadow-sm hover:shadow
          min-h-[48px]
        ">
        <font-awesome-icon icon="fa-solid fa-plus-circle" />
        <span class="font-bold">New Receipt</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// ===== File-Level Documentation =====
// ActionButtons.vue: Implements a responsive button group for invoice actions.
// - Mobile-first design with vertical stacking
// - Touch-friendly (48px minimum height)
// - Emits events for parent handling
// - Matches Stratonea design system

import { useRouter } from 'vue-router'

// ===== Constants & Config =====
const router = useRouter()

// ===== Emits =====
const emit = defineEmits<{
  (e: 'download-pdf'): void
  (e: 'share-whatsapp'): void
  (e: 'reset-invoice-counter'): void
}>()

// ===== Event Handlers =====
/**
 * Handles the download PDF action
 * Emits download-pdf event for parent to handle
 */
function handleDownload() {
  console.log('[ActionButtons] Download PDF clicked')
  emit('download-pdf')
}

/**
 * Handles the WhatsApp share action
 * Emits share-whatsapp event for parent to handle
 */
function handleShare() {
  console.log('[ActionButtons] Share WhatsApp clicked')
  emit('share-whatsapp')
}

/**
 * Handles creating a new invoice
 * - Emits reset-invoice-counter event
 * - Navigates to new invoice route
 * - Refreshes the page
 */
async function handleNewInvoice() {
  try {
    emit('reset-invoice-counter')
    await router.push('/new-receipt')
    window.location.reload()
    console.log('[ActionButtons] Created new receipt')
  } catch (error) {
    console.error('[ActionButtons] New receipt error:', error)
  }
}
</script>

