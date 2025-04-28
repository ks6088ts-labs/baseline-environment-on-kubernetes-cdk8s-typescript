## [Argo CD](https://github.com/argoproj/argo-cd)

```shell
NAMESPACE=argocd

# port-forward Argo CD server and access it via http://localhost:8080
k -n $NAMESPACE port-forward service/argocd-server 8080:443

# retrieve the initial admin password
argocd admin initial-password -n $NAMESPACE

# login to Argo CD
argocd login localhost:8080 --username admin --insecure
```

## [Grafana](https://github.com/grafana/helm-charts)

```shell
NAMESPACE=grafana

k -n $NAMESPACE port-forward service/grafana 8080:80

# https://grafana.com/docs/grafana/latest/setup-grafana/installation/helm/#access-grafana
# retrieve the admin password
k -n $NAMESPACE get secret grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

## [Kubecost](https://github.com/kubecost/cost-analyzer-helm-chart)

```shell
NAMESPACE=kubecost

k -n $NAMESPACE port-forward svc/kubecost-cost-analyzer 9090:9090
```
