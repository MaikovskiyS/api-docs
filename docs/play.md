# Play

**POST** `WALLET_URL/play`

## Processing Rules

- **All actions must be processed as a single unit:** either all actions succeed, or none are applied.
- **Rollback on error:** if an error occurs during the processing of any action, all previously performed actions in the same request must be rolled back.
- **Maximum actions per request:** the `actions` array can have a maximum of 2 items. Allowed combinations:
  - `[bet]`
  - `[win]`
  - `[bet, win]`
- **Strict action order:** actions must be processed in the order provided. For example, if `[bet, win]` is sent but the user does not have enough funds for the bet, you must return an error and ignore the win.
- **No processing after round closure:** if the round is already closed (for example, the action_id does not match an open round), the request must not be processed.
- **Unique action_id enforcement:**
  - If an action_id in the request has already been processed, respond with a valid response but do not change the user's balance.
  - If only one of two action_id values in the request has already been processed, the request is invalid and should be rejected with an error.

---
## Request Parameters
| Parameter   | Type              | Required | Description |
|-------------|-------------------|----------|-------------|
| user_id   | string            | ✅       | User ID |
| game      | string            | ✅       | Game Key |
| currency  | string            | ✅       | Currency code |
| actions   | array of [Action](#action)   | optional | Array of actions with the wallet.<br/><br/>ℹ️ There will be no field if the player has not won anything for all the bonus spins.|
| finished  | boolean           | optional  | Marks the end of a series of rounds <br/><br/>ℹ️ [Finished](#finished) |
| game_id   | uuid            | ✅  | Identifier of the spin series (round id) <br/><br/>ℹ️ [Game ID](#game-id) |
| token   | string            | optional  | Session token. This field is optional and will be sent if you create a Session with the session_token parameter. |

#### Action

| Parameter    | Type    | Required | Description |
|--------------|---------|----------|-------------|
| action     | string  | ✅       | Available actions:<br/>• <code>bet</code><br/>• <code>win</code> |
| action_id  | uuid    | ✅       | Unique action ID |
| amount     | uint64  | ✅       | The value to change the balance depending on the action |

### __Parameters Notes__

- ### Finished
When is a series of rounds considered completed (`finished == true`):
  - The paid spin did not give the player any bonus spins (actions: `bet`).
  - The last spin in a series of bonus spins, or the paid spin resulted in a win (actions: `win`, `[bet, win]`).

- ### Game ID
  `game_id` is a unique identifier for a set of spins (round id) that belong to a single bet. It is used together with the `finished` field to group requests into a series. For a single-spin series, `game_id` must be unique for that request. If the series includes multiple spins (for example, bonus rounds), use the same `game_id` for all related requests: the first request starts the series (`actions = [bet]`, `finished = false`), and the last request closes it (`actions = [win]` or `[]`, `finished = true`).

---

## Success Response Parameters

| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| balance  | int64 | ✅       | User's current balance |
| game_id  | uuid   | ✅       | Game ID         |
| transactions | array of [Transaction](#transaction) | optional | Array of transactions |

#### Transaction

| Parameter       | Type   | Description     |
|------------|--------|-----------------|
| action_id  | uuid   | Action ID |

## Failed Response Parameters

| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| code     | int | ✅       | Error code [#reference](./errors.md) |
| message  | string | ✅       | Error message |
| balance  | int64 | optional | Updated balance<br/><br/>ℹ️ It is mandatory to send it if an error is generated related to the balance or rate|

---

## Success Example

_Request_
```http
POST WALLET_URL/play HTTP/1.1
Content-Type: application/json
```
```json
{
"user_id":"1234567891",
"game":"conquestera",
"currency":"USD",
"actions":[
   {
      "amount":10,
      "action":"bet",
      "action_id":"aa9f0d2a-e69c-409c-8422-ae8926b0e585"
   },
   {
      "amount":25,
      "action":"win",
      "action_id":"7a065ebc-2ae5-4d11-bfe1-7d54175b87d2"
   }
],
"game_id": "1345d24f-a9a1-4761-9569-0aa058c28372",
"finished":true
}
```

_Response_
```http
HTTP/1.1 200 OK
Content-Type: application/json
```
```json
{
"balance":1020,
"game_id":"1345d24f-a9a1-4761-9569-0aa058c28372",
"transactions":[
   {
      "action_id":"aa9f0d2a-e69c-409c-8422-ae8926b0e585"
   },
   {
      "action_id":"7a065ebc-2ae5-4d11-bfe1-7d54175b87d2"
   }
]
}
```

## Failed Example

_Request_
```http
POST WALLET_URL/play HTTP/1.1
Content-Type: application/json
```
```json
{
"user_id":"1234567891",
"game":"conquestera",
"currency":"USD",
"actions":[
   {
      "amount":1006,
      "action":"bet",
      "action_id":"aa9f0d2a-e69c-409c-8422-ae8926b0e585"
   },
   {
      "amount":2000,
      "action":"win",
      "action_id":"7a065ebc-2ae5-4d11-bfe1-7d54175b87d2"
   }
],
"game_id": "1345d24f-a9a1-4761-9569-0aa058c28372",
"finished":true
}
```

_Response_
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
"code": 100,
"balance": 1005,
"message": "not enough money for the transaction"
}
```
