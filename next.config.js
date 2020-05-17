const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = phase => {
  const isDevelpment = phase === PHASE_DEVELOPMENT_SERVER
  const env = {
    SITE_NAME: "BlogNext",
    API_BLOG: (() => {
      if (isDevelpment) {
        return "https://jsonplaceholder.typicode.com/"
      } else {
        return "https://api.edblog.com/"
      }
    })()
  }
  return {
    env
  }
}
