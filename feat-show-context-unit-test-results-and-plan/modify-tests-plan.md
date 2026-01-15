# Plan: Modify Tests to Fix Regressions and Verify Features

## Phase 1: Fix `useGeminiStream` Mock Regression

1. [x] Update `MockedGeminiClientClass` in
       `packages/cli/src/ui/hooks/useGeminiStream.test.tsx` to include
       `getFullContext` method stub.
2. [x] Execute `vitest run packages/cli/src/ui/hooks/useGeminiStream.test.tsx`
       to verify the fix.
