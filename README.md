## Setup

```bash
# Install dependencies in root directory
npm install
# Open a new terminal to run the dynamo offline image
cd ./docker && docker-compose up
# Create a new dynamo table with schema in root directory
npm run create-table-local
# Start up local dev server in root directory
npm run dev
```