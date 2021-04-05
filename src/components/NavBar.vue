<template>
    <div>
      <!-- nav top -->
      <div class="bg-blue-dark">
        <div class="container mx-auto px-4">
          <div class="flex py-4 items-center sm:justify-between">
            <div class="w-1/4 sm:hidden">
              <svg
                class="fill-current text-white h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24   24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <div
              class="w-1/2 sm:w-auto text-center text-white text-2xl font-medium"
            >
              coinbase
            </div>
            <div class="w-1/4 sm:w-auto sm:flex text-right">
              <div>
                <img
                  class="h-8 w-8 object-cover inline-block rounded-full"
                  src="http://placeimg.com/640/480/city"
                  alt=""
                />
              </div>
              <div class="hidden sm:flex sm:items-center ml-2">
                <span class="text-white text-sm mr-1">Sylvia Gottlieb</span>
                <div>
                  <svg
                    class="h-4 w-4 text-white inline-block opacity-75"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- seconry -->
      <div class="hidden sm:block bg-blue-dark sm:bg-white sm:border-b">
        <div class="container mx-auto px-4">
          <div class="sm:flex sm:space-x-6">
            <div class="flex -mb-px">
              <a
                href="#"
                class="text-white sm:text-blue-dark flex items-center py-4 border-b border-blue-dark"
              >
                <div class="mr-2">
                  <svg
                    class="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                    />
                  </svg>
                </div>
                <span>Dashboaard</span>
              </a>
            </div>
            <div class="flex -mb-px">
              <a
                href="#"
                class="text-white text-opacity-50 sm:text-opacity-100 sm:text-gray-dark flex items-center py-4 border-b border-transparent hover:text-opacity-100 sm:hover:border-gray-dark"
              >
                <div class="mr-2">
                  <svg
                    class="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
                    />
                  </svg>
                </div>
                <span>Buy/Sell</span>
              </a>
            </div>
            <div class="flex -mb-px">
              <a
                href="#"
                class="text-white text-opacity-50 sm:text-opacity-100 sm:text-gray-dark flex items-center py-4 border-b border-transparent hover:text-opacity-100 sm:hover:border-gray-dark"
              >
                <div class="mr-2">
                  <svg
                    class="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fill-rule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span>Acoounts</span>
              </a>
            </div>
            <div class="flex -mb-px">
              <a
                href="#"
                class="text-white text-opacity-50 sm:text-opacity-100 sm:text-gray-dark flex items-center py-4 border-b border-transparent hover:text-opacity-100 sm:hover:border-gray-dark"
              >
                <div class="mr-2">
                  <svg
                    class="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path
                      fill-rule="evenodd"
                      d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span>Tools</span>
              </a>
            </div>
            <div class="flex -mb-px">
              <a
                href="#"
                class="text-white text-opacity-50 sm:text-opacity-100 sm:text-gray-dark flex items-center py-4 border-b border-transparent hover:text-opacity-100 sm:hover:border-gray-dark"
              >
                <div class="mr-2">
                  <svg
                    class="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span>Settings</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>