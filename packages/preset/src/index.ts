import { definePreset } from '@pandacss/dev'

const preset = definePreset({
  name: 'core',
  theme: {
    extend: {
      tokens: {
        colors: {
          cobalt: {
            50: {
              value: '#ebedf9',
            },
            100: {
              value: '#ebedf9',
            },
            200: {
              value: '#ebedf9',
            },
            300: {
              value: '#ebedf9',
            },
            400: {
              value: '#ebedf9',
            },
          },
        },
      },
    },
  },
})

export default preset
