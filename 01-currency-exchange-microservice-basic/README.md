# Currency Exchange microservice

TBD

## Resources

- http://localhost:3000/api/currency-exchange/from/USD/to/BYN

```json
{
  "id": 10001,
  "from": "USD",
  "to": "BYN",
  "conversionMultiple": 2.495,
  "environmentInfo": "NA"
}
```

## Tables Created

### Exchange table

```sql
create table exchange
(
  id BIGINT not null,
  from VARCHAR(10),
  to VARCHAR(10)
  conversionMultiple FLOAT
  primary key (id)
)
```

## Running Container

### Basic

#### Build image

#### The current build uses Macbook M1 chip with ARM architecture however GKE use linux/amd64

```text
docker build --platform linux/amd64 -t vladjik00raskladjik/currency-exchange:0.0.1-RELEASE .
```

#### Push image to Docker Hub

```text
docker push vladjik00raskladjik/currency-exchange:0.0.1-RELEASE
```

#### Run container

```text
docker container run -d -p 3000:3000 --name=currency-exchange vladjik00raskladjik/currency-exchange:0.0.1-RELEASE
```
