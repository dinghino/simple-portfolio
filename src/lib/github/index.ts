// Barrel export for github lib
import octokit from './client'
import api from './api'

export * from './api'
export * from './adapter'

export default octokit
export { api }
