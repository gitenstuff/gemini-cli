# Validation

1. The primary command for validating all changes is `npm run preflight`.
   ./package.json:55; ./GEMINI.md:3; ./CONTRIBUTING.md:49

# Execution & Debugging

1. To execute the CLI from source, use `npm start` or `npm run build-and-start`.
   ./package.json:20,35; ./CONTRIBUTING.md:223
2. Debugging with an attached inspector is done via `npm run debug`.
   ./package.json:22; ./CONTRIBUTING.md:342

# Testing

1. Unit tests (targeting `packages/core` and `packages/cli`) are executed with
   `npm run test`. ./package.json:41; ./CONTRIBUTING.md:240
2. Integration and End-to-End (E2E) tests are executed with `npm run test:e2e`.
   ./package.json:44; ./docs/integration-tests.md:35
3. A release bundle must be created before running integration tests using
   `npm run bundle`. ./docs/integration-tests.md:21

# Code Quality

1. Static analysis and linting are performed via `npm run lint`, with
   `npm run lint:fix` available for automated repairs. ./package.json:49,50;
   ./CONTRIBUTING.md:517

# Advanced Development

1. Internal agent behavior and tool calls can be monitored by setting
   `GEMINI_DEV_TRACING=true`. ./docs/local-development.md:15
2. Viewing these traces requires starting a telemetry server with
   `npm run telemetry -- --target=genkit` or
   `npm run telemetry -- --target=local`. ./docs/local-development.md:31,64
