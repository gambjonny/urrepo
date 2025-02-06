import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    name: 'package: Panda preset',
    globals: true,
    environment: 'node',
    //coverage: {
    //  reportsDirectory: '../../coverage/preset',
    //}
  },
})
