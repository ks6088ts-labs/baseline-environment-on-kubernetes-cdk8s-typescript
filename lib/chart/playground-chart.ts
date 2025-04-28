import { Construct } from 'constructs';
import { Chart, ChartProps, Helm } from 'cdk8s';
import * as kplus from 'cdk8s-plus-32';
import { Hello } from '../construct/hello';

export interface PlaygroundChartProps extends ChartProps {
  hello?: {
    image: string;
  };
  argocd?: {};
  grafana?: {};
}

export const devPlaygroundChartProps: PlaygroundChartProps = {
  hello: {
    image: 'nginx:latest',
  },
  argocd: {},
  grafana: {},
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

    const helmCharts = [
      {
        name: 'argocd',
        enabled: !!props.argocd,
        repo: 'https://argoproj.github.io/argo-helm',
        chart: 'argo-cd',
      },
      {
        name: 'grafana',
        enabled: !!props.grafana,
        repo: 'https://grafana.github.io/helm-charts',
        chart: 'grafana',
      },
    ];

    // Install enabled Helm charts
    for (const chartConfig of helmCharts) {
      if (chartConfig.enabled) {
        const name = chartConfig.name;
        // Create namespace for the chart
        const namespace = new kplus.Namespace(this, `namespace-${name}`, {
          metadata: {
            name: name,
          },
        });

        // Install Helm chart
        new Helm(this, `helm-${name}`, {
          releaseName: name,
          namespace: namespace.name,
          repo: chartConfig.repo,
          chart: chartConfig.chart,
        });
      }
    }
  }
}
