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
