<template>
    <div>
        <label for="currency" class="block text-sm font-medium text-gray-700 mb-2">Choose Currency</label>
        <select id="currency" v-model="selectedCurrency"
            class="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary">
            <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
                {{ currency.label }}
            </option>
        </select>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const selectedCurrency = ref(props.modelValue)

const currencies = [
    { code: 'GHS', label: 'GHS - Ghana Cedi (₵)' },
    { code: 'NGN', label: 'NGN - Nigerian Naira (₦)' },
    { code: 'KES', label: 'KES - Kenyan Shilling (KSh)' },
    { code: 'ZAR', label: 'ZAR - South African Rand (R)' },
    { code: 'XOF', label: 'XOF - West African CFA Franc (CFA)' },
    { code: 'INR', label: 'INR - Indian Rupee (₹)' },
    { code: 'USD', label: 'USD - US Dollar ($)' },
    { code: 'EUR', label: 'EUR - Euro (€)' },
    { code: 'GBP', label: 'GBP - British Pound (£)' },
    { code: 'CAD', label: 'CAD - Canadian Dollar (CA$)' },
    { code: 'AUD', label: 'AUD - Australian Dollar (A$)' },
]

watch(selectedCurrency, (newVal) => {
    emit('update:modelValue', newVal)
})
</script>