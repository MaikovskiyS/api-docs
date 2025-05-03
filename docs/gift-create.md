# Create Gift Issue

**POST** `PROVIDER_URL/api/gifts/issue`

Content-Type: application/json

## Request Parameters

| Parameter         | Type    | Required | Description|
|-------------------|---------|----------|--------------------------------------------|
| `issue_id`        | string  | ✅        | ID of the gift spins|
| `casino_id`       | string  | ✅        | Casino ID                                      |
| `game`            | string  | ✅        | Game ID|
| `currency`        | string  | ✅        | Currency code in ISO 4217 format ([see list](https://en.wikipedia.org/wiki/ISO_4217))            |
| `bet_level`       | number  | optional | Bet id level. Minimum value 1 (See also `bet_value`)                                             |
| `bet_value`       | number  | optional | Bet value. If specified, this value will be used for the bet amount and `bet_level` will be ignored |
| `gift_quantity`   | number  | ✅        | The number of gift spins. Minimum value 1                                                        |
| `valid_until`     | string  | ✅        | The expiration date of the gift. Cannot exceed 1 month. Format: `2006-01-02T15:04:05Z`           |
| `user`            | object  | ✅        | [User](#user) object parameters|

---
## Failed Response Parameters

| Name       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| `code`     | int | ✅       | Error code [#reference](./errors.md) |
| `message`  | string | ✅       | Error message |
---

## Success Example

_Request_
```http
POST WALLET_URL/api/gifts/issue HTTP/1.1
Content-Type: application/json
```
```json
{
"issue_id": "ewe23www-21we",
"casino_id": "casino_com",
"game": "conquestera",
"currency": "USD",
"bet_level": 1,
"gift_quantity": 10,
"valid_until": "2006-01-02T15:04:05Z",
"user": {
"id": "1234567891",
"external_id": "qsd123sds-sdscx",
"email": "user@example.com",
"firstname": "Peter",
"lastname": "Smith",
"nickname": "mrSmith",
"city": "London",
"country": "UK",
"date_of_birth": "1984-05-23",
"gender": "m",
"registered_at": "2020-12-12"
}
}
```

_Response_
```http
HTTP/1.1 200 OK
Content-Type: application/json
```

## Failed Example

_Request_
```http
POST WALLET_URL/api/gifts/issue HTTP/1.1
Content-Type: application/json
```
```json
{
"issue_id": "ewe23www-21we",
"casino_id": "casino_com",
"game": "conquestera",
"currency": "USD",
"bet_level": 1,
"gift_quantity": 10,
"valid_until": "2006-01-02T15:04:05Z",
"user": {
"id": "1234567891",
"external_id": "qsd123sds-sdscx",
"email": "user@example.com",
"firstname": "Peter",
"lastname": "Smith",
"nickname": "mrSmith",
"city": "London",
"country": "UK",
"date_of_birth": "1984-05-23",
"gender": "m",
"registered_at": "2020-12-12"
}
}
```

_Response_
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
"code": 2106,
"message": "Issue already exist"
}
```
