# Currency Conversion microservice

TBD

## Resources

- http://localhost:3100/currency-conversion/from/EUR/to/BYN/quantity/10

```json
{
  "id": 10002,
  "from": "EUR",
  "to": "BYN",
  "conversionMultiple": 2.915,
  "quantity": 10,
  "totalCalculatedAmount": 29.15
}
```

## Running Container

### Basic

#### Build image

```text
docker build -t vladjik00raskladjik/currency-conversion:0.0.1-RELEASE .
```

#### Push image to Docker Hub

```text
docker push vladjik00raskladjik/currency-conversion:0.0.1-RELEASE
```

#### Run container

```text
docker run -d -p 3100:3100 --name=currency-conversion --link currency-exchange --env CURRENCY_EXCHANGE_URI=http://currency-exchange:3000 vladjik00raskladjik/currency-conversion:0.0.1-RELEASE
```
