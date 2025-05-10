[![test](https://github.com/ks6088ts-labs/baseline-environment-on-kubernetes-cdk8s-typescript/actions/workflows/test.yaml/badge.svg?branch=main)](https://github.com/ks6088ts-labs/baseline-environment-on-kubernetes-cdk8s-typescript/actions/workflows/test.yaml?query=branch%3Amain)
[![release](https://github.com/ks6088ts-labs/baseline-environment-on-kubernetes-cdk8s-typescript/actions/workflows/release.yaml/badge.svg)](https://github.com/ks6088ts-labs/baseline-environment-on-kubernetes-cdk8s-typescript/actions/workflows/release.yaml)

# baseline-environment-on-kubernetes-cdk8s-typescript

Baseline Environment on Kubernetes in CDK for Kubernetes using TypeScript

## Prerequisites

- [CDK for Kubernetes](https://cdk8s.io/docs/latest/)
- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)

## How to use

```shell
# Run CI test
make ci-test

# Deploy to Kubernetes
make deploy MANIFEST=dev-playground-chart

# Delete from Kubernetes
make destroy MANIFEST=dev-playground-chart
```
