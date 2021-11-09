# Currency Exchange microservice

## Google kubernetes deploy

---

### Create deployment and expose service

```text
kubectl create deployment currency-exchange --image=vladjik00raskladjik/currency-exchange:0.0.1.RELEASE
kubectl expose deployment currency-exchange --type=LoadBalancer --port=3000
```

### Set new image

```text
kubectl set image deployment currency-exchange currency-exchange=vladjik00raskladjik/currency-exchange:0.0.2.RELEASE
```

### Delete all resources connected with application

```text
kubectl delete all -l app=currency-exchange
```

### Everything can be specified using a particular [deployment.yml](deployment.yml) file, which can then be used

```text
kubectl apply -f deployment.yml
```

### Using [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)

```text
kubectl apply -f ingress.yml
```
