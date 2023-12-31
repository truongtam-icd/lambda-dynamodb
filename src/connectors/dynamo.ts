import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DYNAMODB_OFFLINE_URL, IS_OFFLINE, REGION } from "config";

const config: DynamoDBClientConfig = {
  region: REGION,
  endpoint: IS_OFFLINE && DYNAMODB_OFFLINE_URL
};

export const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});
