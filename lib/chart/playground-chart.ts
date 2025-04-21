import { Construct } from 'constructs';
import { Chart, ChartProps } from 'cdk8s';
import { Container, Quantity } from '../../imports/k8s';
import { Hello } from '../construct/hello';

export interface PlaygroundChartProps extends ChartProps {
  hello?: {
    replicas: number;
    appLabel: string;
    containers: Container[];
  };
}

export const devPlaygroundChartProps: PlaygroundChartProps = {
  hello: {
    replicas: 1,
    appLabel: 'hello',
    containers: [
      {
        name: 'hello',
        image: 'nginx:latest',
        ports: [
          {
            containerPort: 80,
            name: 'http',
            protocol: 'TCP',
          },
        ],
        resources: {
          limits: {
            cpu: Quantity.fromString('100m'),
            memory: Quantity.fromString('128Mi'),
          },
          requests: {
            cpu: Quantity.fromString('100m'),
            memory: Quantity.fromString('128Mi'),
          },
        },
      },
    ],
  },
};

export const prodPlaygroundChartProps: PlaygroundChartProps = {};

export class PlaygroundChart extends Chart {
  constructor(scope: Construct, id: string, props: PlaygroundChartProps = {}) {
    super(scope, id, props);

    if (props.hello) {
      new Hello(this, 'hello', {
        replicas: props.hello.replicas,
        appLabel: props.hello.appLabel,
        containers: props.hello.containers,
      });
    }
  }
}
