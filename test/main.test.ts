import { PlaygroundChart } from "../lib/chart/playground-chart";
import { Testing } from "cdk8s";

describe("PlaygroundChart", () => {
  test("PlaygroundChart", () => {
    const app = Testing.app();
    const chart = new PlaygroundChart(app, "playground-chart");
    const results = Testing.synth(chart);
    expect(results).toMatchSnapshot();
  });
});
