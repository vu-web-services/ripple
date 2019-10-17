// This custom middleware allows you to override the data passed to the Tide page
// This should always return a object of functions which take the current context as a param
// The results param can be modified for variables used on the page.
// See nuxt-tide/lib/pages/Tide.vue asyncData for execution order
// export default {
//   nameOfMiddlewareA: (context, results) => {
//     results.test = 'foo'
//   },
//   nameOfMiddlewareB: (context, results) => {
//     results.test = 'bar'
//   },
// }

export default {
  // Example for adding a custom component into the landing page without backend changes.
  dpChangeTitle: (context, pageData) => {
    if (!pageData.tidePage) {
      return
    }
    // Add your condition to check if it's a publication child page
    // Update hero banner title like below
    // pageData.tidePage.appHeroBanner.data.title = 'hello'
    // Add other data changes here.
  }
}
