<template>
    <!-- Toolkit Preview Section -->
    <div class="relative mt-8 mb-4">
        <!-- Background -->
        <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-95 
                  transform transition-transform hover:scale-[1.02] duration-500 rounded-lg shadow-lg"></div>

        <!-- Content Container -->
        <div class="relative px-6 py-8 sm:px-8">
            <div class="max-w-2xl mx-auto text-center space-y-6">
                <!-- Main Message -->
                <div class="space-y-2">
                    <h2 class="text-xl sm:text-2xl font-bold text-white">
                        Need help growing your business?
                    </h2>
                    <p class="text-primary-100 text-sm sm:text-base">
                        These 3 articles will help you grow a smarter, better business - all free
                    </p>
                </div>

                <!-- Mini App Cards -->
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 text-left text-sm">
                    <a v-for="tool in tools" :key="tool.name" :href="tool.link"
                        class="bg-white/90 hover:bg-white transition rounded-lg p-4 shadow-sm hover:shadow-md border border-primary-100">
                        <h3 class="text-primary-700 font-semibold mb-1">{{ tool.name }}</h3>
                        <p class="text-primary-500">{{ tool.description }}</p>
                    </a>
                </div>

                <!-- Optional: View All or Shuffle -->
                <!-- <div class="pt-4">
                    <button @click="showNextTools"
                        class="text-white text-sm underline underline-offset-4 hover:text-primary-200 transition">
                        Show More Tools
                    </button>
                </div> -->

                <!-- Background Pattern -->
                <div class="absolute inset-0 bg-pattern opacity-5 rounded-lg pointer-events-none"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// === Tool List (can be randomized or paginated) ===
const fullToolList = [
    // { name: '✅ Invoice Maker', description: 'Create professional invoices with tax and branding', link: 'https://invoicemaker-eosin.vercel.app/' },
    // { name: '✅ Receipt Maker', description: 'Generate clean, printable receipts in seconds', link: 'https://receiptmaker-ten.vercel.app/' },
    // { name: '🧪 Income Tracker', description: 'Record and manage your daily income streams', link: '#' },
    { name: '📖 7 Quick Actions to Double Your Sales', description: 'Practical steps to boost revenue without spending more - Learn More ...', link: 'https://benappiahpoku.com/7-quick-actions-you-can-do-today-to-double-your-sales/' },
    { name: '📖 The WhatsApp Business Advantage', description: 'Step-by-step guide for entrepreneurs in Ghana to boost sales and engagement - Learn More ...', link: 'https://benappiahpoku.com/the-whatsapp-business-advantage-step-by-step-guide-for-entrepreneurs-in-ghana/' }, 
    { name: '📖 Demystifying Digital Marketing', description: 'Build your online presence, one step at a time - Learn More ...', link: 'https://benappiahpoku.com/demystifying-digital-marketing-building-your-online-presence-one-step-at-a-time/' },
]

// Show the first 3 tools by default
const currentIndex = ref(0)
const tools = ref(fullToolList.slice(currentIndex.value, currentIndex.value + 3))

/**
 * showNextTools
 * Shows the next 3 tools in the list, looping back to start if at the end.
 */
// const showNextTools = () => {
//     // Calculate the next index (loop back if at end)
//     currentIndex.value = (currentIndex.value + 3) % fullToolList.length
//     // If at the end, slice will wrap around to the start
//     if (currentIndex.value + 3 <= fullToolList.length) {
//         tools.value = fullToolList.slice(currentIndex.value, currentIndex.value + 3)
//     } else {
//         // If less than 3 left, show remaining + start from beginning
//         tools.value = fullToolList.slice(currentIndex.value).concat(fullToolList.slice(0, (currentIndex.value + 3) % fullToolList.length))
//     }
// }
</script>

<style scoped>
/* Subtle background pattern */
.bg-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

/* Smooth transitions */
.transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

/* Touch-friendly mobile optimizations */
@media (max-width: 640px) {
    a {
        min-height: 48px;
        /* Mobile touch target */
        width: 100%;
        /* Full width on mobile */
        max-width: 280px;
        /* Limit maximum width */
    }
}
</style>