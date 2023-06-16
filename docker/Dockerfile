FROM amazon/dynamodb-local

WORKDIR /home/dynamodblocal

CMD ["-jar", "DynamoDBLocal.jar", "-dbPath", "./db", "-sharedDb"]
VOLUME ["./db"]
