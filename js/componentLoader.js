
// Component Loader for Manaaki Care Landing Page

// Since we're running into CORS issues with fetch when using file:// protocol,
// let's use a different approach with inline components

// Store all component HTML directly in JavaScript
const components = {
  'head-component': `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Manaaki Care - Client/Case Management Software</title>
<meta name="description" content="Powerful client/case management and outcome measures tracking software for social/community services">

<!-- Tailwind CSS via CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Alpine.js via CDN -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

<!-- Custom CSS -->
<link rel="stylesheet" href="css/styles.css">

<!-- Custom Tailwind Configuration -->
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#f0f9ff',
                        100: '#e0f2fe',
                        200: '#bae6fd',
                        300: '#7dd3fc',
                        400: '#38bdf8',
                        500: '#0ea5e9',
                        600: '#0284c7',
                        700: '#0369a1',
                        800: '#075985',
                        900: '#0c4a6e',
                    }
                }
            }
        }
    }
</script>

<!-- Custom styles -->
<style type="text/tailwindcss">
    @layer utilities {
        .btn {
            @apply px-4 py-2 rounded-md font-medium transition-colors duration-200;
        }
        .btn-primary {
            @apply bg-primary-600 text-white hover:bg-primary-700;
        }
        .btn-outline {
            @apply border border-gray-300 hover:bg-gray-50;
        }
        .card {
            @apply bg-white rounded-lg shadow-md p-6;
        }
    }
</style>
  `,
  'header-component': `
<!-- Header/Navigation -->
<header class="bg-blue-50 shadow-md sticky top-0 z-50" x-data="{ mobileMenuOpen: false }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
            <div class="flex items-center">
                <div class="flex-shrink-0 flex items-center">
                    <!-- Logo with eye shape -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" class="mr-2">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="#0284c7" stroke-width="3"/>
                        <path d="M12,20 Q20,12 28,20" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                        <path d="M12,20 Q20,28 28,20" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <!-- Manaaki Care text -->
                    <span class="text-2xl font-extrabold text-primary-600">Manaaki Care</span>
                </div>
                <nav class="hidden md:ml-10 md:flex md:space-x-10">
                    <a href="#features" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium transition-colors duration-200">Features</a>
                    <a href="#benefits" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium transition-colors duration-200">Benefits</a>
                    <a href="#pricing" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium transition-colors duration-200">Pricing</a>
                    <a href="#contact" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium transition-colors duration-200">Contact</a>
                </nav>
            </div>
            <div class="hidden md:flex items-center mr-8">
                <a href="#contact" class="btn btn-primary px-6 py-3 text-base shadow-md hover:shadow-lg transform transition hover:-translate-y-0.5">Request Demo</a>
            </div>
            
            <!-- Mobile menu button -->
            <div class="flex items-center md:hidden">
                <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Mobile menu, show/hide based on menu state -->
    <div x-show="mobileMenuOpen" class="md:hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
            <a href="#features" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Features</a>
            <a href="#benefits" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Benefits</a>
            <a href="#pricing" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Pricing</a>
            <a href="#contact" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Contact</a>
            <div class="mt-4 px-3">
                <a href="#contact" class="w-full btn btn-primary block text-center py-3">Request Demo</a>
            </div>
        </div>
    </div>
</header>
  `,
  'hero-component': `
<!-- Hero Section -->
<section class="relative bg-blue-50 overflow-hidden py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-5xl tracking-tight font-black text-gray-900 sm:text-6xl md:text-7xl mb-8">
                <span class="block mb-2">Streamline your</span>
                <span class="block text-primary-600">case management</span>
            </h1>
            <p class="mt-6 text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                Comprehensive client/case management and outcome tracking software designed specifically for social and community services.
            </p>
            <div class="mt-10">
                <a href="#contact" class="btn btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
                    Get Started
                </a>
            </div>
        </div>
    </div>
</section>
  `,
  'features-component': `
<!-- Features Section -->
<section id="features" class="py-20 bg-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase mb-3">Features</h2>
            <p class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                Everything you need to manage cases effectively
            </p>
        </div>

        <div class="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <!-- Feature 1 -->
            <div class="card feature-item transform transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center h-full">
                <div class="flex-shrink-0 mb-5">
                    <div class="rounded-full bg-primary-100 p-3 inline-flex">
                        <svg class="h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Client Management</h3>
                <p class="text-lg text-gray-500 flex-grow">
                    Easily manage client information, track interactions, and maintain comprehensive case histories in one secure location.
                </p>
            </div>

            <!-- Feature 2 -->
            <div class="card feature-item transform transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center h-full border-primary-500">
                <div class="flex-shrink-0 mb-5">
                    <div class="rounded-full bg-primary-100 p-3 inline-flex">
                        <svg class="h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Case Documentation</h3>
                <p class="text-lg text-gray-500 flex-grow">
                    Document case notes, assessments, and service plans with customisable templates designed for social services.
                </p>
            </div>

            <!-- Feature 3 -->
            <div class="card feature-item transform transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center h-full">
                <div class="flex-shrink-0 mb-5">
                    <div class="rounded-full bg-primary-100 p-3 inline-flex">
                        <svg class="h-12 w-12 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Outcome Tracking</h3>
                <p class="text-lg text-gray-500 flex-grow">
                    Measure and report on client outcomes with customisable metrics and powerful analytics tools.
                </p>
            </div>
        </div>
    </div>
</section>
  `,
  'benefits-component': `
<!-- Benefits Section -->
<section id="benefits" class="py-20 bg-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase mb-3">Benefits</h2>
            <p class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                Designed for everyone in your organisation
            </p>
        </div>

        <div class="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <!-- For Organizations -->
            <div class="card transform transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <div class="flex-shrink-0 mb-5">
                    <div class="rounded-full bg-primary-100 p-3 inline-flex">
                        <svg class="h-10 w-10 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">For Organisations & Funders</h3>
                <ul class="mt-4 space-y-4 text-lg text-gray-500 flex-grow">
                    <li class="flex items-start">
                        <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Demonstrate programme effectiveness</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Improve funding applications</span>
                    </li>
                </ul>
            </div>
            
            <!-- For Staff -->
            <div class="card transform transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full border-primary-500">
                <div class="flex-shrink-0 mb-5">
                    <div class="rounded-full bg-primary-100 p-3 inline-flex">
                        <svg class="h-10 w-10 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">For Staff</h3>
                <ul class="mt-4 space-y-4 text-lg text-gray-500 flex-grow">
                    <li class="flex items-start">
                        <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Reduce administrative burden</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Focus more on client support</span>
                    </li>
                </ul>
            </div>
            
            <!-- For Clients -->
            <div class="card transform transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                <div class="flex-shrink-0 mb-5">
                    <div class="rounded-full bg-primary-100 p-3 inline-flex">
                        <svg class="h-10 w-10 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">For Clients</h3>
                <ul class="mt-4 space-y-4 text-lg text-gray-500 flex-grow">
                    <li class="flex items-start">
                        <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Better service coordination</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span>Improved outcomes tracking</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  `,
  'pricing-component': `
<!-- Pricing Section -->
<section id="pricing" class="py-20 bg-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase mb-3">Pricing</h2>
            <p class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-5xl mb-6">
                Simple, transparent pricing
            </p>
            <p class="text-xl text-gray-500 max-w-3xl mx-auto">
                Choose the plan that works best for your organisation's needs.
            </p>
        </div>

        <div class="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <!-- Free Tier -->
            <div class="card transform transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full text-center border border-gray-200">
                <div class="p-8 flex-grow">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Free</h3>
                    <div class="mt-4 flex items-baseline justify-center text-gray-900">
                        <span class="text-6xl font-extrabold tracking-tight">$0</span>
                    </div>
                    <p class="mt-6 text-lg text-gray-500">Up to 10 users, Basic functionality, Community support.</p>
                    
                    <ul class="mt-8 space-y-4 text-left pl-6">
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>Up to 10 users</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>Basic functionality</span>
                        </li>
                    </ul>
                </div>
                <div class="p-6 bg-gray-50 border-t border-gray-100">
                    <a href="#contact" class="w-full btn btn-outline text-center block py-3">Get Started</a>
                </div>
            </div>

            <!-- Professional Tier -->
            <div class="card transform transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full text-center border-2 border-primary-500 shadow-lg scale-105 z-10">
                <div class="absolute inset-x-0 -top-5 flex justify-center">
                    <span class="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                        Most Popular
                    </span>
                </div>
                <div class="p-8 flex-grow">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                    <div class="mt-4 flex items-baseline justify-center text-gray-900">
                        <span class="text-6xl font-extrabold tracking-tight">$100</span>
                        <span class="ml-1 text-2xl font-semibold text-gray-500">/month</span>
                    </div>
                    <p class="mt-6 text-lg text-gray-500">All basic features plus advanced reporting and support.</p>
                    
                    <ul class="mt-8 space-y-4 text-left pl-6">
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>Up to 50 users</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>Priority email support</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>Data integration & custom workflows</span>
                        </li>
                    </ul>
                </div>
                <div class="p-6 bg-primary-50 border-t border-primary-100">
                    <a href="#contact" class="w-full btn btn-primary text-center block py-3">Get Started</a>
                </div>
            </div>

            <!-- Enterprise Tier -->
            <div class="card transform transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full text-center border border-gray-200">
                <div class="p-8 flex-grow">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                    <div class="mt-4 flex items-baseline justify-center text-gray-900">
                        <span class="text-4xl font-extrabold tracking-tight">Contact Us</span>
                    </div>
                    <p class="mt-6 text-lg text-gray-500">Client-Hosted deployment with unlimited users and dedicated support.</p>
                    
                    <ul class="mt-8 space-y-4 text-left pl-6">
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>On-Premises deployment</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>Dedicated account manager</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-primary-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>Custom implementation & security</span>
                        </li>
                    </ul>
                </div>
                <div class="p-6 bg-gray-50 border-t border-gray-100">
                    <a href="#contact" class="w-full btn btn-outline text-center block py-3">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</section>
  `,
  'contact-component': `
<!-- Contact Section -->
<section id="contact" class="py-20 bg-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase mb-3">Contact Us</h2>
            <p class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-5xl mb-6">
                Ready to get started?
            </p>
            <p class="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
                Request a demo or get in touch with our team to learn more about how our platform can help your organisation.
            </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
            <!-- Contact Form -->
            <div id="contact-form-container" x-data="{ formSubmitted: false }">
                <form id="contact-form" class="bg-white shadow-xl rounded-lg p-8" x-show="!formSubmitted" @submit.prevent="formSubmitted = true">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" name="name" id="name" autocomplete="name" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="Your name">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" name="email" id="email" autocomplete="email" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="you@example.com">
                        </div>
                        <div class="md:col-span-2">
                            <label for="organization" class="block text-sm font-medium text-gray-700 mb-1">Organisation</label>
                            <input type="text" name="organization" id="organization" autocomplete="organization"
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="Your organisation">
                        </div>
                        <div class="md:col-span-2">
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" name="message" rows="4" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="How can we help you?"></textarea>
                        </div>
                    </div>
                    <div class="mt-8">
                        <button type="submit" class="w-full btn btn-primary py-3 text-lg font-medium">Request Demo</button>
                    </div>
                </form>
                
                <!-- Confirmation Message -->
                <div x-show="formSubmitted" class="bg-white p-8 rounded-lg shadow-xl text-center animate-fadeIn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 class="text-2xl font-medium text-gray-900 mb-4">Thank you for your message!</h3>
                    <p class="text-xl text-gray-600 mb-6">Your message has been received by Manaaki Care and we will be in touch with you shortly.</p>
                    <button @click="formSubmitted = false" class="text-primary-600 hover:text-primary-800 font-medium text-lg">
                        Send another message
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
  `,
  'footer-component': `
<!-- Footer -->
<footer class="bg-blue-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
                <div class="flex items-center">
                    <!-- Logo with eye shape -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" class="mr-2">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="#0284c7" stroke-width="3"/>
                        <path d="M12,20 Q20,12 28,20" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                        <path d="M12,20 Q20,28 28,20" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <!-- Manaaki Care text -->
                    <span class="text-2xl font-bold text-primary-600">Manaaki Care</span>
                </div>
                <p class="mt-4 text-base text-gray-500 max-w-md">
                    Comprehensive client/case management and outcome tracking software designed specifically for social and community services.
                </p>
                <div class="mt-6 flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Twitter</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">LinkedIn</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                <ul class="mt-4 space-y-4">
                    <li>
                        <a href="#features" class="text-base text-gray-500 hover:text-gray-900">Features</a>
                    </li>
                    <li>
                        <a href="#benefits" class="text-base text-gray-500 hover:text-gray-900">Benefits</a>
                    </li>
                    <li>
                        <a href="#pricing" class="text-base text-gray-500 hover:text-gray-900">Pricing</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul class="mt-4 space-y-4">
                    <li>
                        <a href="#contact" class="text-base text-gray-500 hover:text-gray-900">Contact</a>
                    </li>
                    <li>
                        <a href="#" class="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#support" class="text-base text-gray-500 hover:text-gray-900">Support Centre</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-12 border-t border-gray-200 pt-8">
            <p class="text-base text-gray-400 text-center">
                &copy; 2025 Manaaki Care. All rights reserved.
            </p>
        </div>
    </div>
</footer>
  `
};

class ComponentLoader {
  constructor() {
    this.loadedComponents = 0;
    this.totalComponents = 0;
  }

  loadComponent(elementId, componentKey) {
    this.totalComponents++;
    try {
      // Get the component HTML from our components object
      const html = components[componentKey];
      if (!html) {
        throw new Error(`Component not found: ${componentKey}`);
      }
      
      document.getElementById(elementId).innerHTML = html;
      this.loadedComponents++;
      
      if (this.loadedComponents === this.totalComponents) {
        // All components loaded, initialize any scripts
        this.initializeScripts();
      }
    } catch (error) {
      console.error('Error loading component:', error);
    }
  }

  initializeScripts() {
    // Re-initialize any scripts that need to run after components are loaded
    document.dispatchEvent(new Event('componentsLoaded'));
  }
}

// Create a global instance
window.componentLoader = new ComponentLoader();
