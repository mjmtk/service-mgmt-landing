// Component Loader for ManaakiTech Landing Page
const components = {
  'head-component': `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Manaaki Care | Client Management Software by Manaaki Tech</title>
<meta name="description" content="Manaaki Care: Powerful client/case management software for social services. A product of Manaaki Tech, empowering communities through innovative technology solutions.">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%230369a1' opacity='0.9'/%3E%3Cpath d='M8,16 Q16,8 24,16' fill='none' stroke-width='3' stroke-linecap='round' stroke='url(%23rainbow)'/%3E%3Cdefs%3E%3ClinearGradient id='rainbow' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23ffb3b3'/%3E%3Cstop offset='16.67%25' stop-color='%23ffd9b3'/%3E%3Cstop offset='33.33%25' stop-color='%23ffffb3'/%3E%3Cstop offset='50%25' stop-color='%23b3ffb3'/%3E%3Cstop offset='66.67%25' stop-color='%23b3b3ff'/%3E%3Cstop offset='83.33%25' stop-color='%23d9b3ff'/%3E%3Cstop offset='100%25' stop-color='%23ffb3ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E">

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
                    },
                    company: {
                        50: '#f5f7fa',
                        100: '#e4e7eb',
                        200: '#cbd2d9',
                        300: '#9aa5b1',
                        400: '#7b8794',
                        500: '#616e7c',
                        600: '#52606d',
                        700: '#3e4c59',
                        800: '#323f4b',
                        900: '#1f2933',
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
        .company-name {
            @apply text-company-800 font-bold;
        }
        .product-name {
            @apply text-primary-600 font-extrabold;
        }
    }
</style>`,
  'header-component': `
<!-- Header/Navigation -->
<header class="bg-white shadow-sm" x-data="{ mobileMenuOpen: false, productsOpen: false }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex items-center">
                <div class="flex-shrink-0 flex items-center">
                    <!-- Organization Logo -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" class="mr-2">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="#0369a1" stroke-width="3"/>
                        <path d="M12,20 Q20,12 28,20" fill="none" stroke="#0369a1" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <!-- Organization Name -->
                    <span class="text-xl font-bold text-primary-700 mr-2">Manaaki Tech</span>
                    
                    <!-- Separator -->
                    <span class="mx-2 text-gray-300">|</span>
                    
                    <!-- Product Logo -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" class="ml-1 mr-1">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="#0369a1" stroke-width="3"/>
                        <path d="M12,20 Q20,12 28,20" fill="none" stroke="#0369a1" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    
                    <!-- Product Name in Blue -->
                    <div class="flex flex-col">
                        <span class="text-sm font-bold text-primary-700">Manaaki Care</span>
                        <span class="text-xs text-gray-500 -mt-1">by Manaaki Tech</span>
                    </div>
                </div>
                <nav class="hidden md:ml-10 md:flex md:space-x-10">
                    <div class="relative" x-data="{ open: false }">
                        <button @click="open = !open" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center">
                            Products
                            <svg class="ml-1 h-4 w-4" :class="{'transform rotate-180': open}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    <div x-show="open" @click.away="open = false" class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div class="relative grid gap-3 bg-white px-3 py-3 sm:gap-4 sm:p-4">
                                <a href="#" class="flex items-start rounded-lg hover:bg-gray-50 -m-2 p-2 transition duration-150 ease-in-out">
                                    <div class="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-md bg-primary-500 text-white">
                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div class="ml-4">
                                            <p class="text-base font-medium text-gray-900">Manaaki Care</p>
                                            <p class="mt-1 text-sm text-gray-500">Client/case management for social wellbeing organizations</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#features" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium transition-colors duration-200">Features</a>
                    <a href="#benefits" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium transition-colors duration-200">Benefits</a>
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
            <button @click="productsOpen = !productsOpen" class="flex justify-between w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">
                <span>Products</span>
                <svg class="h-5 w-5" :class="{'transform rotate-180': productsOpen}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div x-show="productsOpen" class="pl-3">
                <a href="#" class="block px-2 py-1 text-sm font-medium text-primary-600 hover:bg-gray-50">Manaaki Care</a>
            </div>
            <a href="#features" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Features</a>
            <a href="#benefits" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Benefits</a>
            <a href="#contact" class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Contact</a>
            <div class="mt-4 px-3">
                <a href="#contact" class="w-full btn btn-primary block text-center py-3">Request Demo</a>
            </div>
        </div>
    </div>
</header>`,
  'hero-component': `
<!-- Hero Section -->
<section class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                    <!-- Product Badge -->
                    <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mb-4">
                        <span class="inline-block w-2 h-2 rounded-full bg-primary-700 mr-1.5"></span>
                        Manaaki Care | A Manaaki Tech Product
                    </div>
                    
                    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span class="block text-primary-700">Streamline your</span>
                        <span class="block text-primary-700">case management</span>
                    </h1>
                    
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Comprehensive client/case management and outcome tracking software designed specifically for social and community services.
                    </p>
                    
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow">
                            <a href="#contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
                                Get Started
                            </a>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#features" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10">
                                Learn More
                            </a>
                        </div>
                    </div>
                    
                    <!-- Organization Mission -->
                    <p class="mt-6 text-sm text-gray-500 border-l-2 border-primary-200 pl-3 italic">
                        Part of Manaaki Tech's mission to empower social services with innovative technology solutions.
                    </p>
                </div>
            </main>
        </div>
    </div>
</section>`,
  'features-component': `
<!-- Features Section -->
<section id="features" class="py-20 bg-white">
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
                    Measure and report on client outcomes with customizable assessment tools and visual reporting dashboards.
                </p>
            </div>
        </div>
    </div>
</section>`,
  'benefits-component': `
<!-- Benefits Section -->
<section id="benefits" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase mb-3">Benefits</h2>
            <p class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                Why choose Manaaki Care?
            </p>
        </div>

        <div class="mt-12 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <!-- Benefit 1 -->
            <div class="relative">
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <div class="ml-16">
                    <h3 class="text-xl font-medium text-gray-900">Increased Efficiency</h3>
                    <p class="mt-2 text-base text-gray-500">
                        Streamline workflows and reduce administrative burden, allowing staff to focus more time on client support.
                    </p>
                </div>
            </div>

            <!-- Benefit 2 -->
            <div class="relative">
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <div class="ml-16">
                    <h3 class="text-xl font-medium text-gray-900">Enhanced Security</h3>
                    <p class="mt-2 text-base text-gray-500">
                        Keep sensitive client data secure with role-based access controls and encryption that meets industry standards.
                    </p>
                </div>
            </div>

            <!-- Benefit 3 -->
            <div class="relative">
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <div class="ml-16">
                    <h3 class="text-xl font-medium text-gray-900">Improved Reporting</h3>
                    <p class="mt-2 text-base text-gray-500">
                        Generate comprehensive reports for funders and stakeholders with just a few clicks, saving hours of manual work.
                    </p>
                </div>
            </div>

            <!-- Benefit 4 -->
            <div class="relative">
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <div class="ml-16">
                    <h3 class="text-xl font-medium text-gray-900">Better Client Outcomes</h3>
                    <p class="mt-2 text-base text-gray-500">
                        Track progress and identify trends to improve service delivery and achieve better results for your clients.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>`,
  'contact-component': `
<!-- Contact Section -->
<section id="contact" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase mb-3">Contact Us</h2>
            <p class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                Ready to transform your service delivery?
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Get in touch to schedule a demo or learn more about how Manaaki Care can help your organization.
            </p>
        </div>

        <div class="mt-12 max-w-lg mx-auto">
            <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <div class="mt-1">
                        <input type="text" name="name" id="name" class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Your name">
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                        <input type="email" name="email" id="email" class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="your.email@example.com">
                    </div>
                </div>
                <div>
                    <label for="organization" class="block text-sm font-medium text-gray-700">Organization</label>
                    <div class="mt-1">
                        <input type="text" name="organization" id="organization" class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="Your organization">
                    </div>
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                    <div class="mt-1">
                        <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md" placeholder="How can we help you?"></textarea>
                    </div>
                </div>
                <div>
                    <button type="submit" class="w-full btn btn-primary py-3 px-6 text-base font-medium shadow-md hover:shadow-lg transform transition hover:-translate-y-0.5">
                        Request Demo
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>`,
  'footer-component': `
<!-- Footer -->
<footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <!-- Organization Section -->
        <div class="flex flex-col md:flex-row justify-between mb-8">
            <div class="mb-8 md:mb-0 md:w-1/3">
                <div class="flex items-center mb-4">
                    <!-- Organization Logo -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" class="mr-2">
                        <circle cx="20" cy="20" r="18" fill="none" stroke="#0369a1" stroke-width="3"/>
                        <path d="M12,20 Q20,12 28,20" fill="none" stroke="#0369a1" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <span class="text-lg font-bold text-primary-700">Manaaki Tech</span>
                </div>
                <p class="text-gray-500 text-sm">
                    Empowering social services with innovative technology solutions to improve community outcomes.
                </p>
            </div>
            
            <!-- Products Section -->
            <div class="mb-8 md:mb-0 md:w-1/3">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Our Products</h3>
                <ul class="space-y-2">
                    <li>
                        <a href="#" class="text-base text-gray-500 hover:text-gray-900 flex items-center">
                            <span class="inline-block w-2 h-2 rounded-full bg-primary-700 mr-2"></span>
                            Manaaki Care
                        </a>
                    </li>
                    <li class="text-sm text-gray-400">More products coming soon...</li>
                </ul>
            </div>
            
            <!-- Links Section -->
            <div class="md:w-1/3">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Quick Links</h3>
                <div class="grid grid-cols-2 gap-4">
                    <a href="#" class="text-base text-gray-500 hover:text-gray-900">Home</a>
                    <a href="#features" class="text-base text-gray-500 hover:text-gray-900">Features</a>
                    <a href="#benefits" class="text-base text-gray-500 hover:text-gray-900">Benefits</a>
                    <a href="#contact" class="text-base text-gray-500 hover:text-gray-900">Contact</a>
                    <a href="privacy-policy.html" class="text-base text-gray-500 hover:text-gray-900">Privacy Policy</a>
                    <a href="support.html" class="text-base text-gray-500 hover:text-gray-900">Support Centre</a>
                </div>
            </div>
        </div>
        
        <div class="border-t border-gray-200 pt-8">
            <p class="text-center text-base text-gray-400">
                &copy; 2025 Manaaki Tech. All rights reserved.
            </p>
        </div>
    </div>
</footer>`
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
