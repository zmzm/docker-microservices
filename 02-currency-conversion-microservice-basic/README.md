# Currency Conversion microservice

TBD

## Resources

- http://localhost:3100/api/currency-conversion/from/EUR/to/BYN/quanity/10

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

#### The current build uses Macbook M1 chip with ARM architecture however GKE use linux/amd64

```text
docker build --platform linux/amd64 -t vladjik00raskladjik/currency-conversion:0.0.1-RELEASE .
```

#### Push image to Docker Hub

```text
docker push vladjik00raskladjik/currency-conversion:0.0.1-RELEASE
```

#### Run container

```text
docker run -d -p 3100:3100 --name=currency-conversion --link currency-exchange --env CURRENCY_EXCHANGE_URI=http://currency-exchange:3000 vladjik00raskladjik/currency-conversion:0.0.1-RELEASE
```
