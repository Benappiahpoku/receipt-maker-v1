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
                    <!-- Business Information -->
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Business Name</label>
                            <input v-model="form.businessName" type="text"
                                class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Contact Number</label>
                            <input v-model="form.contactNumber" type="tel" placeholder="e.g., 024 XXX XXXX"
                                class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">TIN (optional)</label>
                            <input v-model="form.tin" type="text"
                                class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Upload Logo</label>
                            <input type="file" accept="image/*" @change="handleLogoUpload"
                                class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        </div>
                    </div>

                    <!-- Client Information -->
                    <div class="space-y-4 pt-6 border-t mt-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Client Name</label>
                            <input v-model="form.clientName" type="text"
                                class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Client Contact</label>
                            <input v-model="form.clientContact" type="tel"
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
                                    <option value="Card">Card</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700">Amount (GHS)</label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="text-gray-500 sm:text-sm">₵</span>
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
                <div class="space-y-4">
                    <h2 class="text-lg font-medium text-gray-900">🔽 Live Preview 🔽</h2>
                    <ReceiptPreview v-bind="form" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ReceiptPreview from './ReceiptPreview.vue'

// ===== Types & Interfaces =====
interface ReceiptForm {
    businessName: string
    contactNumber: string
    tin: string
    businessLogo: string
    clientName: string
    clientContact: string
    receiptNumber: string
    date: string
    amount: number | null
    paymentMethod: string
    description: string
}

// ===== Main Logic =====
const form = reactive<ReceiptForm>({
    businessName: '',
    contactNumber: '',
    tin: '',
    businessLogo: '',
    clientName: '',
    clientContact: '',
    receiptNumber: generateReceiptNumber(),
    date: new Date().toISOString().slice(0, 10),
    amount: null,
    paymentMethod: 'Cash',
    description: ''
})

// ===== Helper Functions =====
function generateReceiptNumber(): string {
    return `${new Date().getFullYear()}${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`
}

function regenerateReceiptNumber() {
    form.receiptNumber = generateReceiptNumber()
}

function handleLogoUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            form.businessLogo = e.target?.result as string
        }
        reader.readAsDataURL(file)
    }
}

function handleGenerate() {
    // Implement PDF generation
    console.log('Generating PDF...')
}
</script>