<!--
  Banner.vue
  TekLumin promotional banner component
  Mobile-first design with gradient background and call-to-action
-->

<template>
    <section
        class="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 rounded-xl my-12 px-8 py-12 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
        <!-- Logo + Brand (Horizontal Layout) -->
        <div class="flex items-center justify-center mb-8">
            <img src="/tekluminLogo.webp" alt="TekLumin Logo" class="h-10 w-10 mr-3" />
            <span class="text-xl font-bold text-gray-800 tracking-tight">TekLumin</span>
        </div>

        <!-- Headline with Emoji -->
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            💻 Ready to Look Sharp Online?
        </h2>

        <!-- Sub-headline with Emojis -->
        <p class="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            🚀 We build clean, mobile-friendly websites in just days ✨
            <br />
            <span class="text-sm text-gray-600">Hosting included • No setup fees</span>
        </p>

        <!-- CTA Button with Modern Styling -->
        <a href="https://www.teklumin.com/pricing" class="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg
             bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
             transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            <span>LET'S GO</span>
            <span class="ml-2 text-lg">⚡</span>
        </a>
    </section>
</template>

<script setup lang="ts">
// ===== Component Setup =====
/**
 * Banner Component
 * Displays TekLumin promotional banner with call-to-action
 * Props could be added later if you want to reuse with different text/links
 */

// No props or reactive data needed for this static banner
</script>
