# VARIABLE=VALUE sh curl-scripts/auth/create-game.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/create-game" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    ""
  }'
