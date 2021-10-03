# Currency Exchange Micro Service - H2

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
```
create table exchange_value 
(
	id bigint not null, 
	conversion_multiple decimal(19,2), 
	currency_from varchar(255), 
	currency_to varchar(255), 
	primary key (id)
)
```

### Running Container

#### Basic
```
docker container run --publish 8000:8000 in28min/currency-exchange:0.0.1-SNAPSHOT
```
