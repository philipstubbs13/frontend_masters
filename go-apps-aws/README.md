# Build Go Apps That Scale on AWS

* <https://frontendmasters.com/courses/go-aws/>
* course slides: <https://static.frontendmasters.com/assets/courses/2024-04-23-go-aws/go-aws-slides.pdf>
* course github repo: <https://github.com/Melkeydev/FrontEndMasters>
* <https://github.com/Melkeydev/go-blueprint>
* <https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html>
* <https://repost.aws/knowledge-center/api-gateway-cloudwatch-logs>
* <https://medium.com/@cheickzida/golang-implementing-jwt-token-authentication-bba9bfd84d60>
* <https://go-chi.io/#/>
* <https://go.dev/tour/welcome/1>
* <https://gobyexample.com/>
* <https://go.dev/doc/effective_go>
* <https://www.gopl.io/>
* <https://lets-go.alexedwards.net/>
* <https://lets-go-further.alexedwards.net/>

```bash
cdk bootstrap aws://155534365205/us-east-1
aws configure
aws s3 ls
aws sts get-caller-identity
aws --version
cdk --version
```

```bash
cdk init app --language go
```

```bash
go get
```

```bash
go get github.com/aws/aws-lambda-go/lambda
```

```bash
go build -o main
```

```bash
GOOS=linux GOARCH=amd64 go build -o bootstrap
```

```bash
zip function.zip bootstrap
```

```bash
cdk diff
```

```bash
cdk deploy
```

```bash
make build
```

```bash
go get github.com/aws/aws-sdk-go/service/dynamodb
go get github.com/aws/aws-sdk-go/aws/session

```

```bash
go get golang.org/x/crypto/bcrypt
```

```bash
curl -X POST https://mdg6f8o003.execute-api.us-east-1.amazonaws.com/prod/register -H "Content-Type: application/json" -d '{"username":"marcG", "password":"ilovePrime"}'

curl -X POST https://mdg6f8o003.execute-api.us-east-1.amazonaws.com/prod/login -H "Content-Type: application/json" -d '{"username":"marcG", "password":"ilovePrime"}'
```

```bash
go get github.com/golang-jwt/jwt/v5
```

```bash
curl -X GET https://mdg6f8o003.execute-api.us-east-1.amazonaws.com/prod/protected -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjoxNzE0MzQ0N"
```

```bash
cdk destroy
```