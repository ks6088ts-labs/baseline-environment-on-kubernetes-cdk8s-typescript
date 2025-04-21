import { Construct } from 'constructs';
import { KubeDeployment, Container } from '../../imports/k8s';

export interface HelloProps {
  replicas: number;
  appLabel: string;
  containers: Container[];
}

export class Hello extends Construct {
  constructor(scope: Construct, id: string, props: HelloProps) {
    super(scope, id);

    // Define a Kubernetes Deployment
    new KubeDeployment(this, 'hello-deployment', {
      spec: {
        replicas: props.replicas,
        selector: { matchLabels: { app: props.appLabel } },
        template: {
          metadata: { labels: { app: props.appLabel } },
          spec: {
            containers: props.containers,
          },
        },
      },
    });
  }
}
