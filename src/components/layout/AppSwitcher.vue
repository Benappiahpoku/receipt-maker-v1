<template>
    <div class="text-center">
        <p class="text-sm text-gray-600 mb-2">
            Need to create a {{ alternateLabel }} instead?
        </p>
        <a :href="alternateLink"
            class="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded transition">
            Go to {{ alternateLabel }} App
        </a>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps<{
    type: 'invoice' | 'receipt'
}>()

const alternateLabel = computed(() =>
    props.type === 'invoice' ? 'Receipt' : 'Invoice'
)

// Update these with your live Vercel URLs
const invoiceUrl = 'https://invoice.teklumen.com'
const receiptUrl = 'https://receipt.teklumen.com'

const alternateLink = computed(() =>
    props.type === 'invoice' ? receiptUrl : invoiceUrl
)
</script>
  
