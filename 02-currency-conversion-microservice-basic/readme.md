# Currency Conversion Micro Service
TBD

## Resources

- http://localhost:8100/currency-conversion/from/EUR/to/BYN/quantity/10

```json
{
  id: 10002,
  from: "EUR",
  to: "BYN",
  conversionMultiple: 2.915,
  quantity: 10,
  totalCalculatedAmount: 29.15
}
```

### Running Containers

```
docker run --publish 8100:8100 --network currency-network --env CURRENCY_EXCHANGE_URI=http://currency-exchange:8000 @@@REPO_NAME@@@/currency-conversion:0.0.1-SNAPSHOT
```

#### Test API 
- http://localhost:8100/currency-conversion/from/EUR/to/BYN/quantity/10

```
docker login
docker push @@@REPO_NAME@@@/currency-conversion:0.0.1-SNAPSHOT
```