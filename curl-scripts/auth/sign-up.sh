# VARIABLE=VALUE sh curl-scripts/auth/sign-up.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
