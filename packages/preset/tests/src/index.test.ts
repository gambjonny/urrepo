import preset from '../../src/index'

describe.concurrent('pandaCSS Preset', () => {
  it('matches the snapshot', ({ expect }) => {
    expect.assertions(1)
    expect(preset).toMatchSnapshot()
  })
})
