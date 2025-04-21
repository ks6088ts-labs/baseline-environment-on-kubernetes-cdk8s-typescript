# kubectl operations

```shell
MANIFEST_FILE=cdk8s.out/dev-playground-chart.k8s.yaml

# creating resources
kubectl apply -f $MANIFEST_FILE

# port forwarding
kubectl port-forward deployment/dev-playground-chart-hello-hello-deployment-xxxx 8888:80

# deleting resources
kubectl delete -f $MANIFEST_FILE
```

## References

- [kubectl Quick Reference](https://kubernetes.io/docs/reference/kubectl/quick-reference/)
- [k9s > Kubernetes CLI To Manage Your Clusters In Style!](https://k9scli.io/topics/install/)
