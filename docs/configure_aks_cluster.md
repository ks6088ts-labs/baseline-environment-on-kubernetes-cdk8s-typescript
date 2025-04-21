# Configure AKS Cluster

```shell
RESOURCE_GROUP_NAME=YOUR_RESOURCE_GROUP_NAME
CLUSTER_NAME=YOUR_CLUSTER_NAME

# Get the credentials for the AKS cluster
az aks get-credentials \
  --resource-group $RESOURCE_GROUP_NAME \
  --name $CLUSTER_NAME \
  --verbose

# (Optional) show the power state of the AKS cluster
az aks show \
  --name $CLUSTER_NAME \
  --resource-group $RESOURCE_GROUP_NAME \
  --query powerState.code

# (Optional) start the AKS cluster
az aks start \
  --name $CLUSTER_NAME \
  --resource-group $RESOURCE_GROUP_NAME \
  --no-wait

# (Optional) stop the AKS cluster
az aks stop \
  --name $CLUSTER_NAME \
  --resource-group $RESOURCE_GROUP_NAME \
  --no-wait
```

## References

- [Quickstart: Deploy an Azure Kubernetes Service (AKS) cluster using Azure CLI](https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-cli)
