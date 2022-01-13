# Azure, Finding First Nodes Public IP Address

Home -Z Network Security Groups -> Find [type = public Ip] under resources 

or

use the search bar; type public ip addresses, find the related resource group

## If Azure says cluster's k8s version is upgraded, node pool's k8s is upgraded, but some nodes are not actually upgraded
run/rerun

az aks upgrade --resource-group <rc> --name <clustername> --kubernetes-version 1.21.7