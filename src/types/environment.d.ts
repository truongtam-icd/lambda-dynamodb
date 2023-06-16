// eslint-disable-next-line
namespace NodeJS {
  // eslint-disable-next-line
  interface ProcessEnv extends NodeJS.ProcessEnv {
    DYNAMODB_TABLE: string;
    DEFAULT_REGION: string;
  }
}
