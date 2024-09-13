export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    console.log(config.NUXT_DUMMY_ENV)
    console.log("API Pinged")
    return {
      message: 'Hello from the Nuxt 3 API!'
    }
  })
  