<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Main Content -->
    <main class="w-full max-w-md mx-auto px-2 py-6 sm:max-w-lg sm:px-4 md:max-w-2xl lg:max-w-3xl">
      <!-- Hero Section -->
      <HeroSection />

      <!-- How It Works Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Generate Receipts in Seconds</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 class="text-xl font-semibold mb-4">Fill Receipt Details</h3>
            <p class="text-gray-600">
              Enter your business details, customer information, and payment amount quickly.
            </p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 class="text-xl font-semibold mb-4">Preview & Generate PDF</h3>
            <p class="text-gray-600">
              Review your receipt and generate a professional PDF document instantly.
            </p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 class="text-xl font-semibold mb-4">Share or Download</h3>
            <p class="text-gray-600">
              Send your receipt via WhatsApp or download it - even without internet!
            </p>
          </div>
        </div>
      </section>

      <!-- Key Features Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Safe and Offline-Friendly</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">100% Free</h3>
            <p class="text-gray-600">No Hidden Costs</p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Instant Access</h3>
            <p class="text-gray-600">No Sign-Up Required</p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Works Offline</h3>
            <p class="text-gray-600">Beat Power & Internet Issues</p>
          </div>
        </div>
      </section>

      <!-- Why SMEs Love This Tool Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">Why SMEs Love This Tool</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">No Internet Required</h3>
            <p class="text-gray-600">Our smart free tool works completely offline, perfect for areas with poor
              connectivity in Ghana, Nigeria, and Kenya.</p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Professional Receipts</h3>
            <p class="text-gray-600">Generate high-quality receipts instantly with our free receipt maker online,
              trusted by thousands of SMEs.</p>
          </div>
          <div class="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4">Mobile Optimized</h3>
            <p class="text-gray-600">Designed specifically for receipt maker for SMEs on mobile devices, with
              touch-friendly interfaces and fast performance.</p>
          </div>
        </div>
      </section>

      <!-- New Invoice View Section -->
      <section class="mt-16 pt-16 border-t border-gray-200">
        <div class="max-w-5xl mx-auto">
          <NewReceiptView />
        </div>
      </section>
    </main>
  </div>
</template>



<script setup lang="ts">
import { useHead } from '@vueuse/head'
import HeroSection from '@/components/layout/HeroSection.vue';
import NewReceiptView from './NewReceiptView.vue'

// Set meta tags for SEO
useHead({
  title: 'Free Smart Receipt Maker for SMEs | Generate Receipts Instantly',
  meta: [
    {
      name: 'description',
      content: 'Create receipts instantly with our smart, free receipt maker. Built for SMEs in Ghana, Nigeria, and Kenya. Simple and reliable.'
    },
    {
      name: 'keywords',
      content: 'smart free tool, receipt generator, free receipt maker online, receipt maker for SMEs, Ghana receipt maker, Nigeria receipt maker, Kenya receipt maker'
    },
    {
      property: 'og:title',
      content: 'Free Smart Receipt Maker for SMEs | Generate Receipts Instantly'
    },
    {
      property: 'og:description',
      content: 'Create receipts instantly with our smart, free receipt maker. Built for SMEs in Ghana, Nigeria, and Kenya. Simple and reliable.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Free Smart Receipt Maker for SMEs",
        "description": "Create receipts instantly with our smart, free receipt maker. Built for SMEs in Ghana, Nigeria, and Kenya.",
        "url": "https://freeonlinereceipt.netlify.app/",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "creator": {
          "@type": "Organization",
          "name": "Stratonea",
          "url": "https://stratonea.com"
        },
        "featureList": [
          "Offline functionality",
          "PDF generation",
          "WhatsApp sharing",
          "Mobile optimized"
        ]
      })
    }
  ]
})
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
}
</style>
