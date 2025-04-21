import { App } from 'cdk8s';
import {
  PlaygroundChart,
  devPlaygroundChartProps,
  prodPlaygroundChartProps,
} from '../lib/chart/playground-chart';

const app = new App();

// Development Environment
new PlaygroundChart(app, 'dev-playground-chart', devPlaygroundChartProps);

// Production Environment
new PlaygroundChart(app, 'prod-playground-chart', prodPlaygroundChartProps);

app.synth();
