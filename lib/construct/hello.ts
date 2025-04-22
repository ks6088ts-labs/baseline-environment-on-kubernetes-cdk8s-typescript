import { Construct } from 'constructs';
import { KubeDeployment, Quantity } from '../../imports/k8s';

export interface HelloProps {
  image: string;
}

export class Hello extends Construct {
  constructor(scope: Construct, id: string, props: HelloProps) {
    super(scope, id);

    // Define a Kubernetes Deployment
    new KubeDeployment(this, 'hello-deployment', {
      spec: {
        replicas: 1,
        selector: { matchLabels: { app: 'hello' } },
        template: {
          metadata: { labels: { app: 'hello' } },
          spec: {
            containers: [
              {
                name: 'hello',
                image: props.image,
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
        },
      },
    });
  }
}
