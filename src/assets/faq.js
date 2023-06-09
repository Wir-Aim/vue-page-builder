export const Faqs = [
  {
    category: "FAQ",
    id: "faq__1", // id is mandatory
    label: "<b>faq</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
        <!-- Section 1 -->
        <section class="py-24 bg-white">
            <div class="px-8 mx-auto max-w-7xl lg:px-16">
                <h2 class="mb-4 text-xl font-bold md:text-3xl">Frequently Asked Questions</h2>
                <div class="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                    <div>
                        <h5 class="mt-10 mb-3 font-semibold text-gray-900">What is Tails</h5>
                        <p>Tails is a drag and drop page builder built on Top of TailwindCSS. You can drop components to create a page that you can export.</p>
                        <h5 class="mt-10 mb-3 font-semibold text-gray-900">Can I try it for Free?</h5>
                        <p>Absolutely, you can try out tails for free; however, if you wish to access all the components and export the page you'll need to upgrade your account.</p>
                        <h5 class="mt-10 mb-3 font-semibold text-gray-900">Where do I go to upgrade my account?</h5>
                        <p>
                            You can upgrade your account by visiting <a href="https://devdojo.com/pro" class="text-indigo-500 underline">The Pro Upgrade Page</a>. You will also gain access to many other applications and sections of the site.
                            <a href="https://help.hellonext.co/faq/startup-eligibility/" target="_blank">here</a>.
                        </p>
                        <h5 class="mt-10 mb-3 font-semibold text-gray-900">How long will I have access to Tails</h5>
                        <p>
                            You will have unlimited access to all your pre-built pages; however, if you want to be able to download and export your pages, you'll need a pro account.
                            <a href="https://paddle.com" target="_blank">Paddle</a> for processing payments.
                        </p>
                    </div>
                    <div>
                        <h5 class="mt-10 mb-3 font-semibold text-gray-900">How do I implement into my project</h5>
                        <p>Implementation in your project is very simple. You can use the exported page as a starting point, or you can copy and paste the HTML into your own page.</p>
                        <h5 class="mt-10 mb-3 font-semibold text-gray-900">What is the license on the pages?</h5>
                        <p>You have unlimited use to the templates used in Tails; however, you cannot re-use the templates to sell for others to use.</p>
                        <h5 class="mt-10 mb-3 font-semibold text-gray-900">Can I cancel my account if I not longer need it?</h5>
                        <p>Of course, you can feel free to cancel your account at anytime, and you can feel free to come back and upgrade again whenever you're ready.</p>
                        <h5 class="mt-10 mb-3 font-semibold text-gray-900">What if I need help with my project?</h5>
                        <p>If you need assistance implementing the templates into your project you can contact support or you can visit our <a href="https://devdojo.com/questions" class="text-indigo-500 underline">question section</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        `,
  },
  {
    category: "FAQ",
    id: "faq__2", // id is mandatory
    label: "<b>faq</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `
        <!-- Section 1 -->
        <section class="relative py-16 bg-white min-w-screen animation-fade animation-delay">
            <div class="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
                <p class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
                    Got a Question? We’ve got answers.
                </p>
                <h3 class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
                    Frequently Asked Questions
                </h3>
                <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">How does it work?</h3>
                    <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Our platform works with your content to provides insights and metrics on how you can grow your business and scale your infastructure.
                    </p>
                </div>
                <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Do you offer team pricing?</h3>
                    <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        Yes, we do! Team pricing is available for any plan. You can take advantage of 30% off for signing up for team pricing of 10 users or more.
                    </p>
                </div>
                <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">How do I make changes and configure my site?</h3>
                    <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        You can easily change your site settings inside of your site dashboard by clicking the top right menu and clicking the settings button.
                    </p>
                </div>
                <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
                    <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">How do I add a custom domain?</h3>
                    <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                        You can easily change your site settings inside of your site dashboard by clicking the top right menu and clicking the settings button.
                    </p>
                </div>
            </div>
        </section>
        `,
  },
];
