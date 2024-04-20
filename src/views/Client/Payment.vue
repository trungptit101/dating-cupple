<template>
  <div class="header flex items-center justify-between" role="menu">
    <div class="flex-auto">
      <a
        data-headersitelogo=""
        href="/en/home/showMenu"
        class="flex items-center white text-decoration-none z2 ms2"
        aria-label="Home"
      >
        <svg class="logo-heart site-logo">
          <use xlink:href="#icon-logoheart"></use>
        </svg>

        <svg class="logo-domain mx1 hide-on-iPad">
          <use xlink:href="#site-logo-elitecupid"></use>
        </svg>
      </a>
    </div>
  </div>
  <form
    name="upgradeForm"
    id="upgradeForm"
    method="post"
    action="https://www.EliteCupid.com/en/payment/order"
    novalidate=""
    data-form-show-spinner="true"
  >
    <div class="header-strip height-auto px2 pt2 flex justify-center">
      <div class="max-width my1 mx-auto flex items-center justify-center">
        <div class="flex items-center selected">
          <p>Choose Membership</p>
        </div>

        <div class="flex items-center opacity-3">
          <p>Personal Details</p>
        </div>
        <div class="flex opacity-3 items-center">
          <p>Receipt</p>
        </div>
      </div>
    </div>

    <div class="tailwind" style="animation: fade-in 1s">
      <div id="upgrade-page-experimental">
        <div class="bg-white lg:bg-[#F8F8F8] lg:pt-16 pt-8">
          <h1
            class="text-center lg:text-[32px] text-2xl lg:font-light font-normal px-4"
          >
            Pick Your <span class="bold">Premium Plan</span> and Connect with
            Elite Singles
          </h1>
          <div
            class="flex justify-between lg:max-w-[980px] m-auto lg:mt-10 mt-10"
          >
            <div class="w-full">
              <div class="px-4">
                <div class="flex lg:px-[84px]">
                  <button
                    class="h-fit w-full relative border-4 lg:mr-2.5 mr-1.5 border-[#D6AD60] rounded-2xl cursor-pointer svelte-13k5u6r"
                  >
                    <div
                      class="rounded-2xl border lg:p-[54px] lg:pb-10 pt-3.5 pb-3 p- w-full lg:bg-white border-transparent bg-[#FFFDF8] svelte-13k5u6r"
                    >
                      <div class="hidden lg:block absolute top-5 right-5">
                        <label class="text-[#323232]"
                          ><div
                            role="button"
                            tabindex="0"
                            aria-label="radio"
                            class="w-6 h-6 transition-all bg-white rounded-full border-2 p-[3px] border-[#D6AD60] h-8 w-8 border-[3px] !p-1 border-[#797C7E]"
                          >
                            <div
                              class="checked w-full transition-all h-full rounded-full bg-[#D6AD60]"
                            ></div>
                          </div>
                          <input type="radio" name="light" class="sr-only peer"
                        /></label>
                      </div>
                      <h2
                        class="lg:mb-6 mb-3 lg:text-2xl text-xl font-normal text-[#323232] svelte-13k5u6r"
                      >
                        Diamond <br class="lg:hidden" />
                        <span class="bold text-[#232E4D] svelte-13k5u6r"
                          >LIGHT</span
                        >
                      </h2>
                      <p
                        class="text-[#323232] lg:text-xl text-base font-normal lg:mb-6 svelte-13k5u6r"
                      >
                        3-month plan
                      </p>
                      <div class="hidden lg:block">
                        <p
                          class="lg:mb-1 lg:-mx-[20px] lg:font-medium bold lg:text-xl text-base text-[#323232] svelte-13k5u6r"
                        >
                          967.000 ₫ VND / month
                        </p>
                        <p
                          class="lg:mb-6 mb-5 font-normal text-sm lg:text-[#797C7E] text-[#505656] svelte-13k5u6r"
                        >
                          Billed in one payment of 2.901.000 ₫ VND
                        </p>
                        <span
                          class="lg:mb-6 mb-5 block w-full border border-[#CCCCCC]"
                        ></span>
                        <ul>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#D6AD60] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#505656]"
                              >Unlimited communications</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#D6AD60] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#505656]"
                              >Advanced matching algorithms</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#D6AD60] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#505656]"
                              >Ads-free experience</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#D6AD60] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#505656]"
                              >Anonymous browsing</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#D6AD60] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#505656]"
                              >Instant messages translation</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#D6AD60] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#505656]"
                              >Ranking above other members</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#D6AD60] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#505656]"
                              >Exclusive search filters</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#D6AD60] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#505656]"
                              >Premium customer support</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </button>
                  <button
                    class="h-fit w-full relative border-4 lg:ml-2.5 ml-1.5 border-transparent rounded-2xl cursor-pointer svelte-13k5u6r"
                  >
                    <div
                      class="rounded-2xl border lg:p-[54px] lg:pb-10 pt-3.5 pb-3 p- w-full lg:bg-white bg-white border border-[#cccccc] svelte-13k5u6r"
                    >
                      <div
                        class="absolute top-0 left-1/2 lg:px-4 px-3 lg:py-2.5 py-1.5 rounded-md lg:text-xl text-sm transform -translate-x-1/2 lg:-translate-y-[16px] -translate-y-[23px] font-normal bg-white text-[#505656] border border-[#505656] svelte-13k5u6r"
                      >
                        Recommended
                      </div>
                      <div class="hidden lg:block absolute top-5 right-5">
                        <label class="text-[#323232]"
                          ><div
                            role="button"
                            tabindex="0"
                            aria-label="radio"
                            class="w-6 h-6 transition-all bg-white rounded-full border-2 p-[3px] border-[#313B59] h-8 w-8 border-[3px] !p-1 border-[#797C7E]"
                          >
                            <div
                              class="checked w-full transition-all h-full rounded-full bg-transparent"
                            ></div>
                          </div>
                          <input type="radio" name="extra" class="sr-only peer"
                        /></label>
                      </div>
                      <h2
                        class="lg:mb-6 mb-3 lg:text-2xl text-xl font-normal text-[#797C7E] svelte-13k5u6r"
                      >
                        Diamond <br class="lg:hidden" />
                        <span class="bold text-[#505656] svelte-13k5u6r"
                          >EXTRA</span
                        >
                      </h2>
                      <p
                        class="text-[#505656] lg:text-xl text-base font-normal lg:mb-6 svelte-13k5u6r"
                      >
                        12-month plan
                      </p>
                      <div class="hidden lg:block">
                        <p
                          class="lg:mb-1 lg:-mx-[20px] lg:font-medium bold lg:text-xl text-base text-[#505656] svelte-13k5u6r"
                        >
                          454.000 ₫ VND / month
                          <span
                            class="ml-2 lg:font-medium bold text-[#7faf41] uppercase svelte-13k5u6r"
                            >SAVE 62%</span
                          >
                        </p>
                        <p
                          class="lg:mb-6 mb-5 font-normal text-sm lg:text-[#797C7E] text-[#505656] svelte-13k5u6r"
                        >
                          Billed in one payment of 5.448.000 ₫ VND
                        </p>
                        <span
                          class="lg:mb-6 mb-5 block w-full border border-[#CCCCCC]"
                        ></span>
                        <ul>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#797C7E] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#797C7E]"
                              >Unlimited communications</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#797C7E] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#797C7E]"
                              >Advanced matching algorithms</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#797C7E] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#797C7E]"
                              >Ads-free experience</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#797C7E] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#797C7E]"
                              >Anonymous browsing</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#797C7E] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#797C7E]"
                              >Instant messages translation</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#797C7E] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#797C7E]"
                              >Ranking above other members</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#797C7E] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#797C7E]"
                              >Exclusive search filters</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#797C7E] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-normal ml-3 text-[#797C7E]"
                              >Premium customer support</span
                            >
                          </li>
                          <li
                            class="flex items-center font-normal text-base mb-2"
                          >
                            <svg class="w-5 h-5 fill-[#797C7E] m-0">
                              <path
                                d="M18.7796 7.17795L9.18124 16.7763C8.76392 17.1936 8.22141 17.4127 7.64759 17.4127C7.07378 17.4127 6.53126 17.1936 6.11395 16.7763L1.22088 11.8832C0.803565 11.4659 0.584473 10.9234 0.584473 10.3496C0.584473 9.77575 0.803565 9.23324 1.22088 8.81592C1.6382 8.3986 2.18072 8.17951 2.75453 8.17951C3.32834 8.17951 3.87086 8.3986 4.28818 8.81592L7.65803 12.1858L15.7331 4.11065C16.1505 3.69334 16.693 3.47424 17.2668 3.47424C17.8406 3.47424 18.3831 3.69334 18.8004 4.11065C19.6142 4.97659 19.6142 6.34331 18.7796 7.17795Z"
                              ></path>
                            </svg>
                            <span class="font-medium ml-3 text-[#505656]"
                              >Most popular plan!</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="payment-content-max-width mx-auto px2">
      <div
        class="max-width mx-auto my3"
        data-toggle="membershipOptionstab"
        data-toggle-class="bold border-bottom"
        style="display: none"
      >
        <div class="tabs center">
          <h1 class="h1 m0 pb1 bold">
            Unlock the Benefits of Diamond Membership
          </h1>
        </div>
      </div>

      <div
        id="paymentOptions"
        data-membership-selected="37"
        style="display: none"
      >
        <div class="mb3" data-toggle-membershipoptionstab="Diamond">
          <div class="flex justify-around">
            <div class="me3">
              <label class="col-12 pointer" for="DiamondMonth3">
                <div class="flex items-center flex-none">
                  <input
                    type="radio"
                    name="product"
                    id="DiamondMonth3"
                    value="37"
                    checked="checked"
                    data-only-show="reset"
                    class="touched"
                  />
                  <div class="icon icon-40 flex-none circle relative diamond">
                  </div>
                  <div class="ms1">
                    <h3 class="m0 color-medium-grey">3 Months</h3>
                    <div class="flex-none">
                      <strong>
                        <span data-currency-price="Diamond3"
                          >967.000 ₫ VND</span
                        >
                        <span class="regular color-medium-grey">per month</span>
                      </strong>
                    </div>
                  </div>
                </div>
                <div class="col-12 my2">
                  <div class="opacity-8" data-billed="">
                    Billed in one payment of
                    <span data-currency-price="Diamond3_2"
                      >2.901.000 ₫ VND</span
                    >
                  </div>
                </div>
              </label>
            </div>

            <div class="mb3">
              <label class="col-12 pointer" for="DiamondMonth12">
                <div class="flex items-center flex-none">
                  <input
                    type="radio"
                    name="product"
                    id="DiamondMonth12"
                    value="39"
                    data-only-show="reset"
                    class="touched"
                  />
                  <div class="icon icon-40 flex-none circle relative diamond">
                  </div>
                  <div class="ms1">
                    <h3 class="m0 color-medium-grey">12 Months</h3>
                    <div class="flex-none">
                      <strong>
                        <span data-currency-price="Diamond12"
                          >454.000 ₫ VND</span
                        >
                        <span class="regular color-medium-grey">per month</span>
                      </strong>
                    </div>
                  </div>
                </div>
                <div class="col-12 my2">
                  <div class="opacity-8" data-billed="">
                    Billed in one payment of
                    <span data-currency-price="Diamond12_2"
                      >5.448.000 ₫ VND</span
                    >
                  </div>
                </div>
                <div class="center white rounded my1 py1 px2 bg-diamond h4">
                  SAVE <span>62</span>%
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div data-payment-options="" class="fade-in">
        <h2 class="bold body-font-color upgrade-experiment payment-title">
          Choose a payment method
        </h2>
        <div class="mb3">
          <div
            class="mb2 pointer payment-option flex items-center"
            data-only-show-this="credit"
          >
            <div class="flex items-center justify-between col-12">
              <label for="credit" class="pointer col-12">
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    class="changeCurrency"
                    id="credit"
                    value="1,1"
                    checked="checked"
                  />
                  <div
                    class="icon icon-40 flex-none circle relative green upgrade-experiment payment-selector-wrapper"
                  >
                  </div>
                  <div class="col-3 me2">
                    <div class="ms1 upgrade-experiment payment-variant-text">
                      Credit / Debit Card
                      <div class="green regular h6 m0">Recommended</div>
                    </div>
                  </div>
                  <div class="flex items-center col-8 ms2">
                    <div class="bank-logo me1 flex items-center">
                      <!-- <img
                        src="/assets/images/upgradeMembership/experiment/desktop/1.svg"
                      /> -->
                    </div>

                    <div class="bank-logo me1 flex items-center">
                      <!-- <img
                        src="/assets/images/upgradeMembership/experiment/desktop/2.png"
                      /> -->
                    </div>

                    <div class="bank-logo me1 flex items-center">
                      <!-- <img
                        src="/assets/images/upgradeMembership/experiment/desktop/3.png"
                      /> -->
                    </div>
                  </div>
                </div>
              </label>
              <div
                alt="info"
                id="1"
                data-title="Credit Card Payment Information"
                data-cm-modal-url="/en/payment/showPaymentMethodInformationC?paymentmethod=1"
              >
                <div
                  class="upgrade-experiment help-icon-wrapper icon icon-20 flex-none fill-action-unhighlight"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-need-payment-option="true" hidden="">
          <div class="m2 flex items-center">
            <div class="icon-24 fill-red me2">
              <!--?xml version="1.0" encoding="utf-8"?-->
              <!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <circle cx="25" cy="25" r="24.5"></circle>
                <path
                  class="st0"
                  d="M24.6,44.2c-2.8,0-4.9-2.2-4.9-5.1c0-3,2.1-5.2,4.8-5.2c2.8,0,4.8,2.1,4.8,5.2C29.4,42,27.4,44.2,24.6,44.2
             L24.6,44.2z M20.6,6.5c0.4-0.4,1-0.7,1.6-0.7h4.8c0.6,0,1.2,0.2,1.6,0.7c0.4,0.4,0.6,1,0.6,1.6l-0.8,18c0,1.2-1.1,2.2-2.3,2.2h-3
             c-1.2,0-2.2-1-2.3-2.2L20,8.1C19.9,7.5,20.2,6.9,20.6,6.5L20.6,6.5z"
                ></path>
              </svg>
            </div>
            <div class="h4">Please select a payment option</div>
          </div>
        </div>

        <div
          class="col-10 center my2 mx-auto upgrade-experiment sdv-co-reg-wrapper"
          data-incsdvcopromo="true"
          data-inc-s-d-v-co-promo="true"
        >
          <label for="incSDGCoReg" class="flex mx0">
            <input
              name="sdgCoRegSiteID"
              value="1001"
              hidden=""
              id="sdgCoRegSiteID"
            />
            <input
              type="checkbox"
              name="incSDGCoReg"
              value="1001"
              class="hide"
              id="incSDGCoReg"
            />
            <div
              class="icon icon-30 relative green pl1 upgrade-experiment sdv-co-reg-checkbox"
            >
            </div>
            <div
              class="mt1 highlight-a relative ms2 upgrade-experiment sdv-co-reg-text"
            >
              By opting in, you receive a free 1-month trial on Dating.com and
              agree that your profile (including photos, personal and payment
              data) will be copied to Dating.com (SOL Networks Limited) and you
              accept
              <a
                href="https://www.Dating.com/terms-and-conditions/##"
                target="_blank"
                >Terms</a
              >
              and
              <a href="https://www.Dating.com/policy/##" target="_blank"
                >Privacy Policy</a
              >
              of Dating.com
            </div>
          </label>
        </div>

        <div class="col-12 center my2">
          <button
            type="submit"
            class="upgrade-experiment upgrade-button relative bg-green white h4 py2 px4 my2 rounded shadow border-none upper-case pointer overflow-hidden"
            id="submitbutton"
            data-sdvcobundle="1001"
          >
            Upgrade Now
          </button>
        </div>

        <div
          class="upgrade-experiment auto-renew-text p0 m0 my1 mx-auto max-width-3 highlight-a center opacity-8"
          data-renew-text=""
        >
          This subscription will be automatically renewed once it expires. This
          will ensure continuous access to all the benefits of a premium
          membership so you can enjoy uninterrupted communications with all your
          potential matches. You can opt out of auto renewal at any time.
          <span class="highlight pointer" data-cm-modal-btn="renew_learnmore"
            >Learn more</span
          >
        </div>
      </div>

      <div id="renew_learnmore" hidden="">
        <div class="modal max-width-2 bg-white rounded p2 fade-in">
          <div class="m2 center">
            <h1>Automatic Renewal</h1>
            <p>
              <b>Automatic Renewal - Continuous Service</b><br />
              There is nothing worse than losing touch with a potential match
              when all you want to do is continue your conversation! To avoid
              this interruption, your membership on EliteCupid.com will be
              automatically renewed. After your initial membership period
              expires, your membership will be automatically renewed for an
              additional equivalent period, at the same price. Your credit/debit
              card will be automatically charged.<br /><br />
              <b>Billing Details</b><br />

              The charge on your billing statement or card will appear as
              "EliteCupid.com Southport AU". You are being billed by Cupid Media
              Pty Ltd, Suite 2502, 5 Lawson Street, Southport, QLD 4215,
              Australia.<br /><br />

              <b>Cancel Any Time</b><br />
              We don't want to interrupt your conversations so we offer a
              continuous service. However, if you want to discontinue the
              service, you can opt out of auto renewal at any time. Simply
              select 'Billing' from the Settings menu to change your billing
              preferences.<br /><br />
              <b>Customer Service</b><br />
              Need more help or information? Feel free to contact our
              <a href="/en/general/contact">customer service team</a>.
            </p>
          </div>
          <div class="flex justify-end">
            <a class="link" aria-controls="modal">Close</a>
          </div>
        </div>
      </div>
      <div
        id="progress-spinner"
        class="overlay flex justify-center items-center col-12 fixed z4 top-0 right-0 left-0 bottom-0 white"
        data-text="Processing now, please wait ..."
        hidden=""
      >
        <svg class="icon-large heart-icon spinner m1 logo-heart site-logo">
          <use xlink:href="#icon-logoheart"></use>
        </svg>
        <span>Processing now, please wait ...</span>
      </div>

      <div style="display: none">
        <a id="compare"></a>

        <div class="right-align">
          <div
            class="trustedsite-trustmark"
            data-type="212"
            data-width="120"
            data-height="50"
          ></div>
        </div>
      </div>

      <!-- if not sparks products -->

      <div style="display: none">
        <div class="col-12 flex items-center mb1"></div>

        <h2 class="bold body-font-color mt3">Your Diamond features</h2>

        <div class="max-width mx-auto">
          <div class="col-12 flex flex-wrap">
            <div class="mb3 col-features me4">
              <div class="h3 mb1">Basic Matching</div>

              <p class="m0 opacity-8">
                We show you profiles that match your ideal partner filtered by
                age, interests and lifestyle.
              </p>
            </div>

            <div class="mb3 col-features me4">
              <div class="h3 mb1">Like</div>

              <p class="m0 opacity-8">
                Show you're interested by sending profile likes to other members
              </p>
            </div>

            <div class="mb3 col-features">
              <div class="h3 mb1">Communicate with Paying Members</div>

              <p class="m0 opacity-8">
                Start messaging any paying member you've got your eye on!
              </p>
            </div>

            <div class="mb3 col-features me4">
              <div class="h3 mb1">Send Unlimited Communications</div>

              <p class="m0 opacity-8">
                Start interacting via instant messenger chat.
              </p>
            </div>

            <div class="mb3 col-features me4">
              <div class="h3 mb1">Unlock Your Messages</div>

              <p class="m0 opacity-8">
                Send and receive unlimited messages to all members
              </p>
            </div>

            <div class="mb3 col-features">
              <div class="h3 mb1">Say Goodbye to Ads</div>

              <p class="m0 opacity-8">
                Premium members enjoy no third-party ads in their dating
                experience.
              </p>
            </div>

            <div class="mb3 col-features me4">
              <div class="h3 mb1">Hide Your Profile and Photos</div>

              <p class="m0 opacity-8">
                Value your privacy? Premium members can hide their profiles and
                photos from other members with ease.
              </p>
            </div>

            <div class="mb3 col-features me4">
              <div class="h3 mb1">Double Your Profile Space</div>

              <p class="m0 opacity-8">
                Eligible members get twice the profile space in search results.
              </p>
            </div>

            <div class="mb3 col-features">
              <div class="h3 mb1">Get Better Matches</div>

              <p class="m0 opacity-8">
                Find your perfect partner easier with access to exclusive mutual
                and reverse matching algorithms. It's never been easier to find
                that special someone.
              </p>
            </div>

            <div class="mb3 col-features me4">
              <div class="h3 mb1">Instantly Translate Messages</div>

              <p class="m0 opacity-8">
                Don't let language barriers get in the way of love with messages
                translated instantly.
              </p>
            </div>

            <div class="mb3 col-features me4">
              <div class="h3 mb1">Priority Messaging</div>

              <p class="m0 opacity-8">
                Be the top message in the inbox of all the singles that you've
                messaged.
              </p>
            </div>

            <div class="mb3 col-features">
              <div class="h3 mb1">Rank Above All Members</div>

              <p class="m0 opacity-8">
                Have your profile rank above all members in search results.
              </p>
            </div>

            <div class="mb3 col-features me4">
              <div class="h3 mb1">Profile Highlighting</div>

              <p class="m0 opacity-8">
                Show you're a serious dater with the exclusive Diamond icon on
                your profile.
              </p>
            </div>

            <div class="mb3 col-features me4">
              <div class="h3 mb1">Premium Customer Service</div>

              <p class="m0 opacity-8">
                Experience premium customer service, 24 hours a day, 7 days a
                week, 365 days a year.
              </p>
            </div>
          </div>
        </div>

        <!-- if not sparks products -->

        <div class="flex items-start mt4 pb4"></div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
</script>
<style lang="scss">
</style>