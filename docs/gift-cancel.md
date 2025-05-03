# Cancel Gift Issue

**POST** `PROVIDER_URL/api/gifts/cancel`

## Request Parameters

| Parameter   | Type   | Required | Description                 |
|-------------|--------|----------|-----------------------------|
| `issue_id`  | string | ✅        | ID of the gift spins        |
| `casino_id` | string | ✅        | Casino ID                   |

---

## Failed Response Parameters

| Name      | Type   | Required | Description                                |
|-----------|--------|----------|--------------------------------------------|
| `code`    | number | ✅        | Error code ([see reference](./errors.md))  |
| `message` | string | ✅        | Error message                              |

---

## Success Example

_Request_
```http
POST PROVIDER_URL/api/gifts/cancel HTTP/1.1
Content-Type: application/json
```
```json
{
  "issue_id": "ewe23www-21we",
  "casino_id": "casino_com"
}
```

_Response_
```http
HTTP/1.1 200 OK
Content-Type: application/json
```

---

## Failed Example

_Request_
```http
POST PROVIDER_URL/api/gifts/cancel HTTP/1.1
Content-Type: application/json
```
```json
{
  "issue_id": "ewe23www-21we",
  "casino_id": "casino_com"
}
```

_Response_
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
  "code": 2107,
  "message": "Gift issue not found"
}
```