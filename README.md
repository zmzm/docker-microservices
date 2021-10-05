# Microservices

These simple microservices enable us to **focus on** learning the tools - Docker, Kubernetes, CI, CD and build the infrastructure needed around typical microservices.

## Currency Exchange Service

If you ask it the value of 1 USD in BYN the Currency Exchange Service answers

- 1 USD is 2.495 BYN

http://localhost:8000/currency-exchange/from/USD/to/BYN

```json
{
  "id": 10002,
  "from": "USD",
  "to": "BYN",
  "conversionMultiple": 2.495
}
```

## Currency Conversion

Currency Conversion Service is used to convert a bucket of currencies.

- **STEP 1** : Currency Conversion Service calls the Currency Exchange Service for the value of 1 USD. It gets a response back saying 2.495.
- **STEP 2** : The Currency Conversion Service then multiplies 10 by 60, and returns 24.95 back.

http://localhost:8100/currency-conversion/from/EUR/to/BYN/quantity/10

```json
{
  "id": 10002,
  "from": "USD",
  "to": "BYN",
  "conversionMultiple": 2.495,
  "quantity": 10,
  "totalCalculatedAmount": 24.95
}
```

## How does Currency Conversion know the location of Currency Exchange?

- You don't want to HARDCODE
- Configure an Environment Variable - `CURRENCY_EXCHANGE_SERVICE_HOST`
- --env CURRENCY_EXCHANGE_SERVICE_HOST=http://currency-exchange
