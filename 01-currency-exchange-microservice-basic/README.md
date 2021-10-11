# Currency Exchange microservice

TBD

## Resources

- http://localhost:3000/currency-exchange/from/USD/to/BYN

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

```text
docker build -t vladjik00raskladjik/currency-exchange:0.0.1-RELEASE .
```

#### Push image to Docker Hub

```text
docker push vladjik00raskladjik/currency-exchange:0.0.1-RELEASE
```

#### Run container

```text
docker container run -d -p 3000:3000 --name=currency-exchange vladjik00raskladjik/currency-exchange:0.0.1-RELEASE
```
