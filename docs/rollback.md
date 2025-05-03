# Rollback

**POST** `WALLET_URL/rollback`

## Processing Rules

- **All actions from actions must be processed as a single unit:** either all actions succeed, or none are applied.
- **Maximum array length actions = 2:** only `[bet]` is allowed.
- **Integration must handle the rollback event even if the player does not have enough funds.**
- **Actions must be processed in the order in which they are listed.**
- **Only requests for `[bet]` and `[bet, win]` can be canceled.** The request for `[win]` is not canceled and will be sent later with the same `game_id` and `action_id`.
- **The Rollback request is created only after the Play request**, in the following cases:
  - The game server response time is out from the integration
  - The integration responded with an http code >= 500
  - The response from the integration could not be processed or the response contains errors
  - While saving the game session, a problem occurred on the game server
- **Integration should not handle actions with the same action_id twice:**
  - If there is a match for all action_id, then respond with a valid response without changing the user's balance
  - If there is a match of 1 of 2 action_id, the request is considered invalid (respond with an error)
- **Rollback should undo the original actions:**
  - Return funds when the bet is rolling back

---

## Request Parameters

| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| user_id | string | ✅        | User ID         |
| game     | string | ✅        | Game Key        |
| currency | string | ✅        | Currency code   |
| actions   | array of [Action](#action)   | optional | Array of actions with the wallet|
| finished  | boolean           | optional  | Definition of the end of a series of round <br/><br/>ℹ️ `finished` value from the **Play** request |
| game_id   | uuid            | ✅  | Identifier of the spin series (round id) <br/><br/>ℹ️ `game_id` value from the **Play** request |
| token     | string            | optional  | Session token. This field is optional and will be sent if you create a Session with the session_token parameter. |

#### Action
| Parameter              | Type   | Required | Description            |
|-------------------|--------|----------|-----------------------------|
| action          | string | ✅        | Must be `rollback`          |
| action_id       | uuid   | ✅        | Unique action ID      |
| original_action_id| uuid | ✅        | Unique ID of the transaction to be rolled back.  <br/><br/>  ℹ️ `action_id` from the **Play** request |

---

## Success Response Parameters

| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| balance  | int64 | ✅       | User's current balance |
| game_id  | uuid   | ✅       | Game ID         |
| transactions | array of [Transaction](#transaction) | optional | Array of completed transactions |

#### Transaction

| Parameter       | Type   | Description     |
|------------|--------|-----------------|
| action_id  | uuid   | Action ID <br/><br/>  ℹ️ `action_id` from the request|

## Failed Response Parameters

| Parameter       | Type   | Required | Description     |
|------------|--------|----------|-----------------|
| code     | int | ✅       | Error code [#reference](./errors.md) |
| message  | string | ✅       | Error message |

---

## Success Response
_Request_
```json
{
"user_id":"1234567891",
"game":"conquestera",
"currency":"USD",
"actions":[
  {
    "action":"rollback",
    "action_id":"255aca12-4d8e-47f9-b79b-3bc5993ccc53",
    "original_action_id":"aa9f0d2a-e69c-409c-8422-ae8926b0e585"
  },
  {
    "action":"rollback",
    "action_id":"004a167d-5d34-4e18-8e5c-817b681921b3",
    "original_action_id":"7a065ebc-2ae5-4d11-bfe1-7d54175b87d2"
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
"balance":1005,
"game_id":"1345d24f-a9a1-4761-9569-0aa058c28372",
"transactions":[
  {
    "action_id":"255aca12-4d8e-47f9-b79b-3bc5993ccc53"
  },
  {
    "action_id":"004a167d-5d34-4e18-8e5c-817b681921b3"
  }
]
}
```

## Failed Response

_Request_
```http
POST WALLET_URL/rollback HTTP/1.1
Content-Type: application/json
```
```json
{
"user_id":"1234567891",
"game":"conquestera",
"currency":"USD",
"actions":[
  {
    "action":"rollback",
    "action_id":"255aca12-4d8e-47f9-b79b-3bc5993ccc53",
    "original_action_id":"aa9f0d2a-e69c-409c-8422-ae8926b0e585"
  },
  {
    "action":"rollback",
    "action_id":"004a167d-5d34-4e18-8e5c-817b681921b3",
    "original_action_id":"7a065ebc-2ae5-4d11-bfe1-7d54175b87d2"
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
  "code": 1254,
  "message": "internal error"
}
```
