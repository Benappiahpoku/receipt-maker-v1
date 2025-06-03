# Product Requirements Document: Stratonea Receipt Generator App

1. Overview
A free, offline-first receipt generator built for Ghanaian SMEs. It enables users to quickly create, preview, and download professional receipts in PDF format—no sign-in required.

2. Purpose
To complement the existing Invoice App by offering a separate, dedicated tool for generating receipts. This keeps both tools lightweight, focused, and user-friendly.

3. Target Users
   - Small business owners in Ghana and Africa.
   - Freelancers who need quick receipts.
   - Traders who operate offline but need professional documentation.
  
4. Key Features
   - Receipt Input Form
   - Business Info: Name, contact, TIN (optional), logo upload.
   - Client Info: Name, contact details.
   - Receipt Details:
   - Receipt Number (auto-generated + editable)
   - Date (default: today)
   - Payment Mode (Cash, Momo, Bank Transfer, etc.)
   - Amount Received
   - Description (what was paid for)
  
5. Output Features
   - Preview Panel: Live receipt preview with all entered data.
   - Download: Generate and download as PDF (html2pdf.js).
   - Print: Option to print directly.
   - Share: Basic WhatsApp sharing of receipt link or file.
6. UI Goals
   - Mobile-first
   - Minimal text-based layout (like the Invoice App)
   - Simple, non-distracting interface
7. Functional Requirements
   - Offline support via localForage
   - Save last-used business info in local storage
   - Responsive design (Vue + Tailwind)
   - Hosted on Vercel
   - Shareable URL via Vercel subdomain
8. Future Add-ons (V2 Ideas)

- Signature input (draw or upload)
- Save receipts locally for record-keeping
- CSV export of receipt history
  