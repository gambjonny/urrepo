import preset from "../../src/index";

describe("PandaCSS Preset", () => {
  it("matches the snapshot", () => {
    expect(preset).toMatchSnapshot();
  });
});
