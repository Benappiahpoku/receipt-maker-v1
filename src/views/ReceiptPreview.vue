<template>
    <!-- Live Preview Section -->
    <div class="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div class="text-center space-y-4 border-b pb-4">
            <!-- Logo placeholder -->
            <div v-if="businessLogo" class="flex justify-center">
                <img :src="businessLogo" alt="Business Logo" class="h-16 w-auto" />
            </div>
            <h3 class="font-bold text-xl">{{ businessName || 'Your Company Name' }}</h3>
            <p class="text-gray-600">Tel: {{ contactNumber || '024 XXX XXXX' }}</p>
            <p v-if="tin" class="text-gray-600">TIN: {{ tin }}</p>
        </div>

        <!-- Receipt Details -->
        <div class="space-y-3">
            <p><span class="font-medium">Receipt No:</span> REC-{{ receiptNumber }}</p>
            <p><span class="font-medium">Date:</span> {{ formattedDate }}</p>
            <p><span class="font-medium">Received from:</span> {{ clientName || 'Client Name' }}</p>
            <p><span class="font-medium">Contact:</span> {{ clientContact }}</p>
            <p class="text-xl font-bold">
                <span class="font-medium text-base">Amount:</span>
                GHS {{ formattedAmount }}
            </p>
            <p><span class="font-medium">Payment Method:</span> {{ paymentMethod || 'Cash' }}</p>
            <p class="text-gray-700"><span class="font-medium">Description:</span> {{ description || 'Payment for services' }}</p>
        </div>

        <!-- Footer -->
        <div class="text-center text-gray-600 text-sm pt-4 border-t">
            <p>Thank you for your business!</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define props for receipt data
interface Props {
    businessName?: string
    contactNumber?: string
    tin?: string
    businessLogo?: string
    clientName?: string
    clientContact?: string
    receiptNumber?: string
    date?: string
    amount?: number | null
    paymentMethod?: string
    description?: string
}

const props = withDefaults(defineProps<Props>(), {
    businessName: '',
    contactNumber: '',
    tin: '',
    businessLogo: '',
    clientName: '',
    clientContact: '',
    receiptNumber: '',
    date: '',
    amount: null,
    paymentMethod: 'Cash',
    description: ''
})

// Computed properties for formatting
const formattedAmount = computed(() => {
    if (!props.amount) return '0.00'
    return props.amount.toFixed(2)
})

const formattedDate = computed(() => {
    if (!props.date) return ''
    return new Date(props.date).toLocaleDateString('en-GH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
})
</script>