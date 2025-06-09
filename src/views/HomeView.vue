<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Main Content -->
    <main class="w-full max-w-md mx-auto px-2 py-6 sm:max-w-lg sm:px-4 md:max-w-2xl lg:max-w-3xl">
      <!-- Hero Section -->
      <section class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">
          Simple, Fast & Free Receipt Maker
        </h1>
        <p class="text-xl text-gray-600 mb-8">No Internet? No Problem</p>
        <p class="text-lg text-gray-500 mb-8">Create Professional Receipts Anytime, Anywhere.</p>
        <router-link to="/new-receipt"
          class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition duration-300">
          Create Your Free Receipt
        </router-link>
      </section>

      <!-- How It Works Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
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
        <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>
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
import NewReceiptView from './NewReceiptView.vue'
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
}
</style>
