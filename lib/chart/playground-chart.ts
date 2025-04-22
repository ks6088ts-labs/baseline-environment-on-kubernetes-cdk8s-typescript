import { Construct } from 'constructs';
import { Chart, ChartProps } from 'cdk8s';

import { Hello } from '../construct/hello';

export interface PlaygroundChartProps extends ChartProps {
  hello?: {
    image: string;
  };
}

export const devPlaygroundChartProps: PlaygroundChartProps = {
  hello: {
    image: 'nginx:latest',
  },
};

export const prodPlaygroundChartProps: PlaygroundChartProps = {};

export class PlaygroundChart extends Chart {
  constructor(scope: Construct, id: string, props: PlaygroundChartProps = {}) {
    super(scope, id, props);

    if (props.hello) {
      new Hello(this, 'hello', {
        image: props.hello.image,
      });
    }
  }
}
