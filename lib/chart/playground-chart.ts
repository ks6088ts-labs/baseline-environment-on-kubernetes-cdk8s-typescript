import { Construct } from 'constructs';
import { Chart, ChartProps } from 'cdk8s';

export interface PlaygroundChartProps extends ChartProps {}

export const devPlaygroundChartProps: PlaygroundChartProps = {};
export const prodPlaygroundChartProps: PlaygroundChartProps = {};

export class PlaygroundChart extends Chart {
  constructor(scope: Construct, id: string, props: PlaygroundChartProps = {}) {
    super(scope, id, props);
  }
}
