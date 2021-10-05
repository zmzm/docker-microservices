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
  id bigint not null,
  currencyType varchar(10),
  primary key (id)
)
```

## Running Container

### Basic

```text
docker container run --publish 8000:8000 in28min/currency-exchange:0.0.1-SNAPSHOT
```
