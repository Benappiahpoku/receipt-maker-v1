# AGENTS.md - Receipt Maker v1 Development Guide

## Dev Environment Setup

### Initial Setup

```bash
# Clone repos```

### Pre-commit Checklist

- [ ] Run `npm run build` to ensure production build passes
- [ ] Run `npm run test` to ensure all tests pass
- [ ] Test on mobile devices and slow networks
- [ ] Verify PWA functionality and offline capabilities
- [ ] Check TypeScript errors
- [ ] Validate responsive design across breakpoints
- [ ] Test contact forms and WhatsApp integration
- [ ] Verify receipt PDF generation works correctly
- [ ] Test offline receipt creation and storage
- [ ] Validate currency conversion functionality
- [ ] Check mobile money payment integration projectlone [repository-url]
cd receiptMakerv1

# Run the setup script to configure project name
node setup.js

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Scripts

- `npm run dev` - Start development server with hot reload and TypeScript checking
- `npm run build` - Build for production (includes icon generation)
- `npm run preview` - Preview production build locally
- `npm run test` - Run unit tests with Vitest
- `npm run coverage` - Generate test coverage report
- `npm run dev:slow` - Simulate slow network conditions for testing
- `npm run lighthouse` - Run Lighthouse performance audit
- `npm run analyze` - Analyze bundle size and dependencies
- `npm run size-check` - Check bundle size against limits
- `npm run network-test` - Test network resilience
- `npm run generate-icons` - Generate PWA icons

### Key Development Tools

- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety and better DX
- **Tailwind CSS** for mobile-first styling
- **Vite** for fast development and optimized builds
- **Vitest** for unit testing
- **Vue Router** for client-side routing
- **Pinia** for state management with persistence
- **PWA** capabilities with service workers and offline support
- **Firebase** for backend services and data persistence
- **html2pdf.js** for receipt PDF generation
- **Workbox** for advanced caching strategies

## Testing Instructions

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run coverage

# Run specific test file
npm run test -- src/components/base/AppButton.test.ts

# Run tests in watch mode
npm run test -- --watch
```

### Testing Guidelines

- Write tests for all new components and composables
- Focus on user interactions and component behavior
- Test mobile responsiveness and offline functionality
- Use Vue Testing Library for component testing
- Mock network requests and external dependencies
- Test error states and loading conditions
- Ensure tests pass on both desktop and mobile viewports
- Test receipt PDF generation functionality
- Verify offline receipt creation and storage
- Test WhatsApp sharing integration
- Validate currency conversion logic
- Test mobile money payment flows

### Performance Testing

```bash
# Test with slow network simulation
npm run dev:slow

# Run Lighthouse audit
npm run lighthouse

# Analyze bundle size
npm run analyze
```

## PR Instructions

### Branch Naming

- `feature/[description]` - New features
- `fix/[description]` - Bug fixes
- `docs/[description]` - Documentation updates
- `refactor/[description]` - Code refactoring

### Commit Message Format

```bash
[TekLumin] <type>: <description>

Examples:
feat: add mobile-first navigation component
fix: resolve offline indicator positioning
docs: update component usage examples
feat: implement receipt PDF generation
fix: resolve currency conversion bug
feat: add WhatsApp sharing for receipts
```

### Pre-commit Checklist

- [ ] Run `npm run build` to ensure production build passes
- [ ] Run `npm run test` to ensure all tests pass
- [ ] Test on mobile devices and slow networks
- [ ] Verify PWA functionality and offline capabilities
- [ ] Check for TypeScript errors
- [ ] Validate responsive design across breakpoints
- [ ] Test contact forms and WhatsApp integration

### Code Review Requirements

- Mobile-first design principles followed
- Ghana-specific optimizations included
- Performance considerations addressed
- Accessibility standards met
- SEO best practices implemented
- Component reusability maintained

## Project-Specific Guidelines

### Mobile-First Development

- Design for mobile devices first (320px minimum width)
- Use responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Test on actual mobile devices, not just browser dev tools
- Consider touch interactions and gesture support
- Optimize for Ghana's mobile network conditions

### Key Composables

The project includes several specialized composables:

- **useInvoiceCounter.ts** - Manages receipt numbering and tracking
- **useMobileMoneyPayment.ts** - Handles mobile money payment integration
- **useNetworkStatus.ts** - Monitors network connectivity and quality
- **useOfflineStorage.ts** - Manages offline data storage and sync
- **usePWA.ts** - Handles PWA functionality and service worker
- **useToast.ts** - Manages toast notifications

### Services

- **firebase.ts** - Firebase configuration and services
- **WebVitalsService.ts** - Performance monitoring and web vitals tracking

### Component Development

- Use Vue 3 Composition API with `<script setup>`
- Follow the established component structure:

```bash
src/components/
├── base/              # Basic UI components (buttons, inputs, etc.)
│   ├── AppButton.vue
│   ├── AppInput.vue
│   ├── AppForm.vue
│   ├── LoadingSpinner.vue
│   ├── OfflineIndicator.vue
│   ├── StratoneaLogo.vue
│   ├── Divider.vue
│   ├── FloatingAddButton.vue
│   └── LogoUpload.vue
├── layout/            # Layout and navigation components
│   ├── Navigation.vue
│   ├── Footer.vue
│   ├── HeroSection.vue
│   ├── ActionButtons.vue
│   ├── ActionHub.vue
│   ├── AppSwitcher.vue
│   ├── CurrencySelector.vue
│   ├── InvoiceCounter.vue
│   └── ToolKitPreview.vue
├── network/           # Network-aware components
│   ├── NetworkAwareImage.vue
│   ├── DataUsageWarning.vue
│   ├── NetworkSpeedGauge.vue
│   └── RetryMechanism.vue
├── payment/           # Payment-related components
│   └── MobileMoneyPaymentForm.vue
├── donation/          # Donation components
├── pwa tools/        # PWA utility components
│   ├── OptimizedLoading.vue
│   └── PWAUpdateNotification.vue
├── system/           # System-level components
│   └── ErrorBoundary.vue
├── enhanced/         # Advanced components with complex logic
│   └── index.ts
└── analytics/        # Performance monitoring components
    └── WebVitalsMonitor.vue
```

- Implement proper TypeScript interfaces
- Add loading states and error handling
- Include offline fallbacks where appropriate
- Use network-aware loading for images and data

### Ghana-Specific Optimizations

- Optimize for intermittent connectivity
- Include offline indicators and fallbacks
- Support mobile money payment flows
- Consider local hosting and CDN options
- Use appropriate currency formatting (GHS)
- Include local contact methods (WhatsApp, local phone numbers)

### SEO and Performance

- Implement proper meta tags and Open Graph data
- Optimize images for mobile networks
- Use lazy loading for images and components
- Minimize bundle size and loading times
- Include structured data for local business
- Generate and maintain sitemap.xml and robots.txt

### Business Logic

- Business phone: `+233594093926`
- WhatsApp integration for sharing receipts
- Email: `bappiahpoku@gmail.com`
- Support Ghanaian businesses with GHS currency
- Receipt generation with PDF export functionality
- Offline receipt creation and storage
- Mobile money payment integration for receipt payments
- Fast PDF generation (2-5 second processing time)
- WhatsApp sharing for easy receipt distribution
- Receipt history and management
- Currency conversion support (GHS primary, USD/EUR secondary)

### Views Structure

The application includes the following main views:

- **HomeView.vue** - Landing page with app overview and quick actions
- **NewReceiptView.vue** - Receipt creation form with offline support
- **ReceiptPreview.vue** - Receipt preview and editing interface
- **AboutView.vue** - About page with app information
- **ContactView.vue** - Contact form with WhatsApp integration
- **NotFoundView.vue** - 404 error page

### Layout System

- **default.vue** - Main layout with navigation and footer
- **AuthLayout.vue** - Authentication layout (future use)
- **ErrorLayout.vue** - Error page layout

### Deployment

- Deploy to Netlify for optimal performance
- Configure proper build settings
- Set up custom domain handling
- Enable PWA service worker
- Configure proper caching strategies
- Monitor Core Web Vitals
- Test receipt generation in production environment
- Verify offline functionality works correctly
- Ensure mobile money integration is functional

## Common Issues & Solutions

### Network-Related Issues

- Test with `npm run dev:slow` to simulate poor connections
- Implement proper loading states
- Use offline storage for critical data
- Handle network errors gracefully

### Mobile Testing

- Use browser dev tools device emulation
- Test on actual mobile devices when possible
- Verify touch interactions work correctly
- Check font sizes and button sizes for mobile

### Build Issues

- Clear node_modules and reinstall if build fails
- Check TypeScript errors with `npm run dev:typecheck`
- Verify all imports are correct
- Ensure Tailwind classes are properly configured
- Check html2pdf.js dependencies for PDF generation
- Verify Firebase configuration for data persistence
- Test PWA icon generation script

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [html2pdf.js Documentation](https://github.com/eKoopmans/html2pdf.js)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Workbox Documentation](https://developers.google.com/web/tools/workbox)
- [PRD Document](./prd/prd.md) - Project requirements and specifications
