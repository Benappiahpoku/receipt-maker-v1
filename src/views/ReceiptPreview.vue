<template>
    <!-- ===== [Root Container] ===== -->
    <!-- Added id for PDF export compatibility -->
    <div id="receipt-preview-pdf" class="bg-white rounded-lg shadow-lg p-8 space-y-8 max-w-md mx-auto">
        <!-- ===== [Header Section] ===== -->
        <div class="text-center space-y-4">
            <!-- ===== [Company Logo] ===== -->
            <!-- Show the company logo if provided -->
            <div v-if="companyLogo" class="flex justify-center mb-6">
                <!-- 
                  The logo is shown as an <img> tag.
                  - companyLogo should be a base64 string or image URL.
                  - If not showing, check that form.companyLogo is set and valid.
                -->
                <img :src="companyLogo" alt="Company Logo" class="h-20 w-auto object-contain rounded-lg shadow-sm"
                    style="max-height: 80px; max-width: 100%;" />
            </div>
            <div class="space-y-2 pb-6 border-b border-gray-200">
                <h3 class="text-2xl font-bold text-gray-800">{{ companyName || 'Your Company Name' }}</h3>
                <!-- ===== [Fix: Align phone icon and number] ===== -->
                <div class="inline-flex items-center justify-center text-gray-600 gap-1">

                    <span class="inline-block" style="vertical-align: middle; line-height: 1;">
                        {{ phoneNumber || '024 XXX XXXX' }}

                    </span>
                </div>
            </div>
        </div>

        <!-- Receipt Details with modern layout -->
        <div class="space-y-6">
            <!-- Receipt Number and Date in a grid -->
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-gray-500 mb-1">Receipt No.</p>
                    <p class="font-semibold text-gray-800">REC-{{ receiptNumber }}</p>
                </div>
                <div class="bg-gray-50 p-3 rounded-lg">
                    <p class="text-gray-500 mb-1">Date</p>
                    <p class="font-semibold text-gray-800">{{ formattedDate }}</p>
                </div>
            </div>

            <!-- customer Information -->
            <div class="bg-gray-50 p-4 rounded-lg space-y-3">
                <p class="text-gray-500">Received from</p>
                <div class="space-y-2">
                    <p class="font-semibold text-gray-800 text-lg">{{ customerName || 'Customer Name' }}</p>
                    <p class="text-gray-600 text-sm">
                        {{ customerPhone && customerPhone.trim() !== '' ? customerPhone : 'Customer Phone' }}
                    </p>
                </div>
            </div>

            <!-- Payment Details -->
            <div class="space-y-4">
                <!-- Amount with emphasis -->
                <div class="bg-primary-50 p-4 rounded-lg text-center">
                    <p class="text-primary-600 text-sm mb-1">Amount Paid</p>
                    <p class="text-3xl font-bold text-primary-700">
                        {{ currencySymbol + " " }} {{ formatCurrency(amount ?? 0 ) }}
                    </p>
                </div>

                <!-- Payment Method and Description -->
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <p class="text-gray-500 mb-1">Payment Method</p>
                        <p class="font-semibold text-gray-800">{{ paymentMethod || 'Cash' }}</p>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                        <p class="text-gray-500 mb-1">Date Issued</p>
                        <p class="font-semibold text-gray-800">{{ formattedDate }}</p>
                    </div>
                </div>

                <!-- Description -->
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-gray-500 mb-2">Description</p>
                    <p class="text-gray-800">{{ description || 'Payment for services' }}</p>
                </div>
            </div>
        </div>

        <!-- Enhanced Footer -->
        <div class="text-center space-y-4 pt-6 border-t border-gray-200">
            <p class="text-gray-600 font-medium">We hope to serve you again soon. Thank you!</p>
            <div class="flex justify-center gap-2 text-xs text-gray-500">
                <span>{{ formattedDate }}</span>
                <span>•</span>
                <span>Receipt ID: REC-{{ receiptNumber }}</span>
            </div>
    
            <div class="flex justify-center gap-2 text-xs text-gray-600">
                <span>Software developed by TekLumin (+233 594093926)</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// ===== Types & Interfaces =====
interface Props {
    companyName?: string
    companyLogo?: string | null  // Updated to allow null
    phoneNumber?: string

    customerName?: string
    customerPhone?: string
    receiptNumber?: string
    date?: string
    amount?: number | null
    paymentMethod?: string
    description?: string
    currency: string
}

// ===== Props =====
const props = withDefaults(defineProps<Props>(), {
    companyName: '',
    companyLogo: null,
    phoneNumber: '',
    customerName: '',
    customerPhone: '',
    receiptNumber: '',
    date: '',
    amount: null,
    paymentMethod: 'Cash',
    description: '',
    currency: 'GHS'
})


const currencySymbol = computed(() => {
    // Map of currency codes to symbols
    const symbols: Record<string, string> = {
        GHS: 'GHS',
        NGN: '₦',
        KES: 'KSh',
        ZAR: 'R',
        XOF: 'CFA ',
        INR: '₹',
        USD: '$',
        EUR: '€',
        GBP: '£',
        CAD: 'CA$',
        AUD: 'A$'
    }
    // Default to code if not found
    return symbols[props.currency] || props.currency + ' '
})

/**
 * Formats a number with commas for thousands and fixed 2 decimal places
 * Examples:
 * - 1000 -> "1,000.00"
 * - 20000 -> "20,000.00"
 * - 1234567.89 -> "1,234,567.89"
 */
function formatCurrency(amount: number): string {
    return amount.toLocaleString('en-GH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}


const formattedDate = computed(() => {
    if (!props.date) return ''
    return new Date(props.date).toLocaleDateString('en-GH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
})


</script>

<style scoped>
/* Optional: Add smooth transitions */
.bg-gray-50 {
    transition: all 0.2s ease-in-out;
}

.bg-gray-50:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style>