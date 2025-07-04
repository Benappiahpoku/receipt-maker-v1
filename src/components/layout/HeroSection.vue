<template>
    <!-- Hero Section -->
    <section class="container mx-auto px-4 mb-16">
        <!-- Mobile: Stack vertically (image top, text bottom) -->
        <!-- Desktop: 2-column layout (text left, image right) -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <!-- Text Content -->
            <div class="order-2 lg:order-1 w-full md:w-1/2">
                <!-- Updated text alignment and width -->
                <div class="text-center md:text-left mb-8 md:mb-0">
                    <h1 class="text-2xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
                        Simple, Fast & Free Receipts
                    </h1>
                    <p class="text-md md:text-xl text-gray-600 mb-4">Works Without Internet</p>
                    <!-- Updated button alignment -->
                    <div class="flex justify-center md:justify-start">
                        <router-link to="/new-receipt"
                            class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 md:py-4 px-4 md:px-8 rounded-lg transition-all duration-300 hover:scale-105 transform">
                            Create Your Free Receipt
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- Image Section with Animation -->
            <div class="order-1 lg:order-2 w-full md:w-1/2 mb-4">
                <!-- Updated image container with reduced size -->
                <div class="animate-float px-8 md:px-0">
                    <img src="/receipt.webp" alt="Receipt preview on mobile phone"
                        class="w-[60%] md:w-[55%] max-w-md mx-auto rounded-lg " loading="eager" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// No additional script needed
</script>

<style scoped>
/* Custom animations */
@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-float {
    animation: float 1.8s ease-in-out infinite;
}

.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
}
</style>