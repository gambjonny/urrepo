import preset from "../../src/index";

describe.concurrent("PandaCSS Preset", () => {
  it("matches the snapshot", ({ expect }) => {
    expect(preset).toMatchSnapshot();
  });
});
