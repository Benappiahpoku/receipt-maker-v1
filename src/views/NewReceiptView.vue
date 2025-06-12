<!--
  File: src/views/NewReceiptView.vue
  Purpose: Main view for creating and previewing receipts (Stratonea Ghana mobile-first, offline-ready).
  - Handles company/customer info, preview, PDF export, WhatsApp sharing.
  - All code is modular, type-safe, and well-commented for junior developer learning.
-->

<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <header class="bg-primary shadow-sm">
            <div class="max-w-xl mx-auto px-4 py-4">
                <h1 class="text-2xl font-bold text-center text-white">Receipt Generator</h1>
            </div>
        </header>

        <div class="max-w-xl mx-auto px-4 py-6">
            <!-- Form and Preview Grid -->
            <div class="space-y-6">
                <!-- Receipt Form -->
                <form @submit.prevent="handleGenerate" class="bg-white rounded-lg shadow p-6">
                    <!-- Company Information -->
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Company Name</label>
                            <input v-model="form.companyName" type="text"
                                class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Company Phone</label>
                            <input v-model="form.phoneNumber" type="tel" placeholder="e.g., 024 XXX XXXX"
                                class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required />
                        </div>
                        <!-- Logo Upload -->
                        <LogoUpload v-model:logo="form.companyLogo" />
                    </div>
                    <div class="space-y-4 pt-6 border-t mt-6"></div>

                    <!-- ===== [New Feature] START ===== -->
                    <!-- Save/Load/Clear Defaults Buttons and Feedback -->
                    <div class="flex gap-2 mt-2">
                        <button type="button" class="text-blue-600 hover:text-blue-800" @click="loadDefaults">
                            📥&nbsp;Load Info
                        </button>
                        <button type="button" class="text-green-600 hover:text-green-800" @click="saveDefaults">
                            💾&nbsp;Save Info
                        </button>
                        <button type="button" class="text-red-600 hover:text-red-800" @click="clearDefaults">
                            🧹&nbsp;Clear Info
                        </button>
                    </div>
                    <p v-if="defaultSavedMessage" class="text-green-600 text-sm mt-2">
                        {{ defaultSavedMessage }}
                    </p>
                    <p v-if="defaultErrorMessage" class="text-red-600 text-sm mt-2">
                        {{ defaultErrorMessage }}
                    </p>
                    <!-- ===== [New Feature] END ===== -->

                    <!-- ===== Choose Currency  ===== -->
                    <div class="space-y-4 pt-6 border-t mt-6">
                    </div>
                    <!-- Currency Selector Section -->
                    <section>
                        <!--
              Pass modelValue and @update:modelValue for v-model compatibility.
              This ensures the component works with TypeScript strict prop checks.
            -->
                        <CurrencySelector :modelValue="form.currency" @update:modelValue="val => form.currency = val" />
                    </section>

                    <!-- Customer Information -->
                    <div class="space-y-4 pt-6 border-t mt-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Customer Name</label>
                            <input v-model="form.customerName" type="text"
                                class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Customer Phone</label>
                            <input v-model="form.customerPhone" type="tel"
                                class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required />
                        </div>
                    </div>

                    <!-- Transaction Details -->
                    <div class="space-y-4 pt-6 border-t mt-6">
                        <div class="flex items-center space-x-4">
                            <div class="flex-1">
                                <label class="block text-sm font-medium text-gray-700">Receipt Number</label>
                                <input v-model="form.receiptNumber" type="text"
                                    class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required />
                            </div>
                            <button type="button" @click="regenerateReceiptNumber"
                                class="mt-7 px-4 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                                Regenerate
                            </button>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Date</label>
                                <input v-model="form.date" type="date"
                                    class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Payment Method</label>
                                <select v-model="form.paymentMethod"
                                    class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                                    <option value="Cash">Cash</option>
                                    <option value="Mobile Money">Mobile Money</option>
                                    <option value="Bank Transfer">Bank Transfer</option>
                                    <option value="Card">Debit Card</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Amount</label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="text-gray-500 sm:text-sm">{{ currencySymbol }}</span>
                                </div>
                                <input v-model="form.amount" type="number" min="0" step="0.01"
                                    class="block w-full pl-7 pr-3 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    required />
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Description</label>
                            <textarea v-model="form.description" rows="2"
                                class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required></textarea>
                        </div>
                    </div>
                </form>

                <!-- Live Preview -->
                <header class="bg-primary shadow-sm">
                    <div class="max-w-xl mx-auto px-4 py-4">
                        <h1 class="text-2xl font-bold text-center text-white"> Preview Receipt</h1>
                    </div>
                </header>
                <div class="space-y-4">
                    <div class="space-y-4">
                        <ReceiptPreview :company-name="form.companyName" :company-logo="form.companyLogo"
                            :phone-number="form.phoneNumber" :customer-name="form.customerName"
                            :customer-phone="form.customerPhone" :receipt-number="form.receiptNumber" :date="form.date"
                            :amount="form.amount" :payment-method="form.paymentMethod" :description="form.description"
                            :currency="form.currency" />
                    </div>
                </div>
                <section>
                    <Divider />
                </section>
                <section>
                    <ToolKitPreview />
                </section>
                <section>
                    <Divider />
                </section>
                <section>
                    <AppSwitcher type="receipt" />
                </section>





            </div>
        </div>
        <!-- ===== [New Feature] START ===== -->
        <!-- ActionHub for PDF and WhatsApp sharing, now using receipt data -->
        <ActionHub :receipt="form" @download-pdf="handleDownloadPDF" @share-whatsapp="handleShareWhatsApp" />
        <!-- ===== [New Feature] END ===== -->
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted,computed } from 'vue'
import localforage from 'localforage'
import ReceiptPreview from './ReceiptPreview.vue'
import ActionHub from '../components/layout/ActionHub.vue'
import AppSwitcher from '../components/layout/AppSwitcher.vue'
import LogoUpload from '@/components/base/LogoUpload.vue'
import html2pdf from 'html2pdf.js'
import Divider from '../components/base/Divider.vue'
import ToolKitPreview from '../components/layout/ToolKitPreview.vue'
import CurrencySelector from '@/components/layout/CurrencySelector.vue'

// ===== Types & Interfaces =====
interface ReceiptForm {
    companyName: string
    companyLogo: string | null
    phoneNumber: string
    customerName: string
    customerPhone: string
    receiptNumber: string
    date: string
    amount: number | null
    paymentMethod: string
    description: string
    currency: string
}

// ===== Main Logic =====
const form = reactive<ReceiptForm>({
    companyName: '',
    companyLogo: null,
    phoneNumber: '',
    customerName: '',
    customerPhone: '',
    receiptNumber: '',
    date: new Date().toISOString().slice(0, 10),
    amount: null,
    paymentMethod: 'Cash',
    description: '',
    currency:'GHS'
})

// Set the initial receipt number on mount

onMounted(async () => {
    form.receiptNumber = await generateReceiptNumber()
})





const currencySymbol = computed(() => {
    // Map of currency codes to symbols
    const symbols: Record<string, string> = {
        GHS: '₵',
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
    return symbols[form.currency] || form.currency + ' '
})
// ===== Helper Functions =====
/**
 * Generates the next consecutive receipt number in the format YYYY-XXXX.
 * - YYYY: Current year (e.g., 2025)
 * - XXXX: 4-digit number, starts at 0001 and increases by 1 each time
 * - Persists the last number for each year using localForage (offline-ready)
 * - Ghana-optimized: works offline, always unique per year, easy to read on mobile
 *
 * @returns {Promise<string>} The next available receipt number (e.g., "2025-0001")
 */
async function generateReceiptNumber(): Promise<string> {
    // 1. Get the current year as a string (e.g., "2025")
    const year = new Date().getFullYear().toString()
    // 2. Use a unique key per year for localForage storage
    const storageKey = `receiptNumber-${year}`

    // 3. Get the last used number from localForage, or start at 0 if not found
    let lastNumber = await localforage.getItem<number>(storageKey)
    if (typeof lastNumber !== 'number' || isNaN(lastNumber)) {
        lastNumber = 0
    }

    // 4. Increment to get the next number
    const nextNumber = lastNumber + 1

    // 5. Save the new last number back to localForage for persistence
    await localforage.setItem(storageKey, nextNumber)

    // 6. Pad the number to 4 digits (e.g., 1 -> "0001")
    const paddedNumber = String(nextNumber).padStart(4, '0')

    // 7. Return the formatted receipt number (e.g., "2025-0001")
    return `${year}-${paddedNumber}`
}

/**
 * Regenerates the receipt number for the form.
 */
async function regenerateReceiptNumber() {
    form.receiptNumber = await generateReceiptNumber()
}
/**
 * Placeholder for PDF generation logic.
 * Uses html2pdf.js to generate and download a PDF of the receipt preview.
 */
function handleGenerate() {
    // Implement PDF generation
    console.log('Generating PDF...')
}

/**
 * Handles PDF download event from ActionHub.
 * Uses html2pdf.js to generate and download a PDF of the receipt preview.
 * Ghana-ready: simple, mobile-first, and works offline.
 */
function handleDownloadPDF() {
    // 1. Find the preview DOM node
    const previewEl = document.getElementById('receipt-preview-pdf')
    if (!previewEl) {
        alert('Could not find receipt preview to export. Please try again.')
        return
    }

    // 2. Configure html2pdf options for Ghana mobile users
    const fileName = `Receipt-${form.receiptNumber}${form.customerName ? '--' + form.customerName.trim() : ''}.pdf`

    const opt = {
        margin: [0.5, 0.7, 0.5, 0.7], // [top, right, bottom, left] margins in inches
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            letterRendering: true // Better text rendering
        },
        jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'portrait',
            putOnlyUsedFonts: true,
            floatPrecision: 16 // Better text positioning
        },
    }

    // 3. Generate and save PDF
    html2pdf()
        .set(opt)
        .from(previewEl)
        .save()
        .catch(() => {
            alert('Could not generate PDF. Please try again or check your internet connection.')
        })
}

/**
 * Handles WhatsApp share event from ActionHub.
 * Generates a WhatsApp message link with receipt summary and opens it.
 * Ghana-ready: uses simple text, no attachments (for bandwidth).
 */
function handleShareWhatsApp() {
    // 1. Build receipt summary message
    const lines = [
        `🧾 *RECEIPT*`,
        `━━━━━━━━━━━━━━`,
        `*From:* ${form.companyName || 'My Company'}`,
        form.phoneNumber ? `📞 ${form.phoneNumber}` : '',
        ``,
        `📅 *Date:* ${form.date}`,
        form.receiptNumber ? `🔢 *Receipt #:* ${form.receiptNumber}` : '',
        ``,
        `👤 *To:* ${form.customerName || 'Customer'}`,
        form.customerPhone ? `📱 ${form.customerPhone}` : '',
        ``,
        `💰 *Amount:* ₵${form.amount?.toLocaleString('en-GH', { minimumFractionDigits: 2 }) || '0.00'}`,
        `💳 *Payment Method:* ${form.paymentMethod}`,
        ``,
        `📝 *Description:* ${form.description || 'Payment for services'}`,
        ``,
        `Generated with Stratonea Receipt Maker`
    ].filter(Boolean) // Remove empty lines

    const message = lines.join('\n')

    // 2. Format WhatsApp link
    const waUrl = `https://wa.me/?text=${encodeURIComponent(message)}`

    // 3. Open WhatsApp
    window.open(waUrl, '_blank')
}

// ===== [Save Defaults Feature] START =====
// Feedback state for Save/Load/Clear Defaults
const defaultSavedMessage = ref<string | null>(null)
const defaultErrorMessage = ref<string | null>(null)

/**
 * Saves current company info as defaults in localforage.
 * Only saves companyName and phoneNumber.
 * Shows a success or error message.
 */
async function saveDefaults() {
    if (!form.companyName || !form.phoneNumber) {
        defaultErrorMessage.value = 'Please fill in company name and phone before saving.'
        defaultSavedMessage.value = null
        return
    }
    await localforage.setItem('defaultSettings', {
        companyName: form.companyName,
        phoneNumber: form.phoneNumber
    })
    defaultSavedMessage.value = 'Defaults saved!'
    defaultErrorMessage.value = null
}

/**
 * Loads saved defaults from localforage and pre-fills company info fields.
 * Does not trigger form submission or overwrite other fields.
 */
async function loadDefaults() {
    const defaults = await localforage.getItem<{ companyName: string; phoneNumber: string }>(
        'defaultSettings'
    )
    if (defaults) {
        form.companyName = defaults.companyName
        form.phoneNumber = defaults.phoneNumber
        defaultSavedMessage.value = 'Defaults loaded.'
        defaultErrorMessage.value = null
    } else {
        defaultErrorMessage.value = 'No defaults found.'
        defaultSavedMessage.value = null
    }
}

/**
 * Clears saved defaults from localforage.
 * Shows a confirmation message.
 */
async function clearDefaults() {
    await localforage.removeItem('defaultSettings')
    defaultSavedMessage.value = 'Defaults cleared.'
    defaultErrorMessage.value = null
}
// ===== [Save Defaults Feature] END =====
</script>