<!--
  File: src/components/base/LogoUpload.vue
  Purpose: Handles company logo upload, preview, and removal.
  - Ghana-optimized: mobile-first, offline-ready, clear error messages.
  - Exposes logo to parent via v-model:logo for two-way binding.
-->

<template>
    <!-- Logo Upload & Preview -->
    <div class="space-y-2">
        <label for="companyLogo" class="block text-sm font-medium text-gray-700">
            Company Logo
        </label>
        <div
            class="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center relative bg-gray-50">
            <!-- Logo Preview -->
            <img v-if="companyLogo" :src="companyLogo" alt="Company Logo"
                class="object-contain w-full h-full rounded-lg" />
            <!-- Placeholder if no logo -->
            <span v-else class="text-gray-400 text-xs text-center px-2"> Tap to upload </span>
            <!-- Remove Logo Button -->
            <button v-if="companyLogo" type="button" @click.stop="removeLogo"
                class="absolute top-1 right-1 bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-red-700 z-20"
                aria-label="Remove Logo">
                &times;
            </button>
            <!-- File input -->
            <input id="companyLogo" type="file" accept="image/png,image/jpeg,image/jpg"
                class="absolute inset-0 opacity-0 cursor-pointer z-10" @change="handleLogoUpload"
                aria-label="Upload company logo" />
        </div>
        <!-- Show error if file is too large or wrong type -->
        <p v-if="logoError" class="text-xs text-red-600 mt-1">{{ logoError }}</p>
    </div>
</template>

<script setup lang="ts">
// ===== Imports =====
import { ref, watch, onMounted } from 'vue'
import localforage from 'localforage'

// ===== Props & Emits =====
/**
 * Props:
 * - modelValue: string | null (the logo, from parent)
 * Emits:
 * - update:logo (for v-model:logo two-way binding)
 */
const props = defineProps<{
    modelValue?: string | null
}>()
const emit = defineEmits<{
    (e: 'update:logo', value: string | null): void
}>()

// ===== State =====
/**
 * companyLogo: local state for preview and upload
 * logoError: error message for user feedback
 */
const companyLogo = ref<string | null>(props.modelValue ?? null)
const logoError = ref<string | null>(null)

// ===== Watchers =====
/**
 * Sync internal state with parent prop (v-model:logo)
 */
watch(
    () => props.modelValue,
    (newVal) => {
        companyLogo.value = newVal ?? null
    }
)

/**
 * Emit changes to parent when logo changes
 */
watch(companyLogo, (newVal) => {
    emit('update:logo', newVal)
})

// ===== Methods =====
/**
 * Handles logo file upload:
 * - Accepts only images (png, jpg, jpeg)
 * - Checks file size (max 500KB)
 * - Converts to base64 and saves to localForage
 * - Shows preview immediately
 * - Shows error if invalid
 */
async function handleLogoUpload(event: Event) {
    logoError.value = null // Reset error
    const input = event.target as HTMLInputElement
    if (!input.files || input.files.length === 0) return

    const file = input.files[0]
    // Check file type
    if (!file.type.startsWith('image/')) {
        logoError.value = 'Only image files are allowed.'
        return
    }
    // Check file size (max 500KB)
    if (file.size > 500 * 1024) {
        logoError.value = 'File too large. Please upload a smaller logo.'
        return
    }
    // Convert to base64 for preview and storage
    const reader = new FileReader()
    reader.onload = async () => {
        const base64 = reader.result as string
        companyLogo.value = base64
        // Save to localForage for persistence (offline support)
        await localforage.setItem('companyLogo', base64)
    }
    reader.readAsDataURL(file)
}

/**
 * Removes the logo and clears storage
 */
async function removeLogo() {
    companyLogo.value = null
    await localforage.removeItem('companyLogo')
}

// ===== Lifecycle Hooks =====
/**
 * On mount, load logo from localForage if available
 */
onMounted(async () => {
    // Only load if parent hasn't set a logo
    if (!props.modelValue) {
        const storedLogo = await localforage.getItem<string>('companyLogo')
        if (storedLogo) {
            companyLogo.value = storedLogo
        }
    }
})


// Import in parent template
    //   <!-- Replace the old logo upload with new component -->
   // < LogoUpload v - model: logo = "form.companyLogo" />

//Import the need scripts
// import LogoUpload from '@/components/base/LogoUpload.vue' // Logo Import



</script>