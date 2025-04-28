import { Construct } from 'constructs';
import { Chart, ChartProps, Helm } from 'cdk8s';
import * as kplus from 'cdk8s-plus-32';
import { Hello } from '../construct/hello';

export interface PlaygroundChartProps extends ChartProps {
  hello?: {
    image: string;
  };
  argocd?: {};
}

export const devPlaygroundChartProps: PlaygroundChartProps = {
  hello: {
    image: 'nginx:latest',
  },
  argocd: {},
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

    if (props.argocd) {
      const name = 'argocd';
      const namespace = new kplus.Namespace(this, `namespace-${name}`, {
        metadata: {
          name: name,
        },
      });
      new Helm(this, `helm-${name}`, {
        releaseName: name,
        namespace: namespace.name,
        repo: 'https://argoproj.github.io/argo-helm',
        chart: 'argo-cd',
      });
    }
  }
}
