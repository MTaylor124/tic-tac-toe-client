# VARIABLE=VALUE sh curl-scripts/auth/games.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "game": {
    "cell": {
      "index": "'"0"'",
      "value": "x"
    },
    "over": "'"false"'"
  }
}'
