# Currency Exchange microservice

TBD

## Resources

- http://localhost:8000/currency-exchange/from/USD/to/BYN

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

### Currency table

```sql
create table currency
(
  id BIGINT not null,
  currencyType VARCHAR(10),
  primary key (id)
)
```

### Exchange table

```sql
create table currency
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

```text
docker container run --publish 8000:8000 in28min/currency-exchange:0.0.1-SNAPSHOT
```
