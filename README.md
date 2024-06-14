# Hygge Lights


# Auth Routes

Base URL /auth

| HTTP Method | URI path       | Action                               |
|-------------|----------------|--------------------------------------|
| POST        | /signup        | Sign up                              |
| POST        | /login         | Log In                               |
| GET         | /verify        | Verify Auth token                    |

# User Routes

Base URL /user

| HTTP Method | URI path       | Action                               |
|-------------|----------------|--------------------------------------|
| GET         | /userId        | User info                            |
| PUT         | /userId        | Modify user info                     |
| DELETE      | /userId        | Delete user                          |

# Admin Routes

Base URL /admin

| HTTP Method | URI path       | Action                               |
|-------------|----------------|--------------------------------------|
| GET         | /userId        | User info                            |
| PUT         | /userId        | Modify user info                     |

# Candles Routes

Base URL /candles

| HTTP Method | URI path       | Action                               |
|-------------|----------------|--------------------------------------|
| POST        | /              | Create product                       |
| GET         | /              | Get all candles                      |
| GET         | /candleId      | Get one candle info                  |
| PUT         | /candleId      | Update one candle info               |
| DELETE      | /candleId      | Delete a specific candle             |
