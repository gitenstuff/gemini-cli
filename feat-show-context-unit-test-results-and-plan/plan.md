# Plan: Reimplement "Show Context View" Feature

## Phase 1: Architectural Analysis of the Legacy Feature

1. [x] Analyze the commit history of `feat-shadow` (`dc422df8a` and ancestors
       `2b0b5a386` through `39890c70b`) to extract logic for capturing and
       displaying model context.
2. [x] Identify the specific key sequence used for the context shortcut in the
       legacy codebase.
3. [x] Extract the `thoughtSignature` masking logic (the `replacer` function)
       from the legacy `ContextView.tsx`.

## Phase 2: Mapping to the Modern `main` Architecture

1. [x] Identify the current state management pattern for UI visibility toggles
       (likely in `UIStateContext.tsx`).
2. [x] (BLOCKING SUB-PLAN): Expose 'Full Context Sent to Model' data.
   1. [x] Re-implement `GeminiClient.getFullContext()` in
          `packages/core/src/core/client.ts` to return system instructions and
          history.
   2. [x] Add `fullContextForView` state to `useGeminiStream` hook and update it
          during `submitQuery` and stream completion.
      1. [x] Add `fullContextForView` state variable to
             `packages/cli/src/ui/hooks/useGeminiStream.ts`.
      2. [x] Update state in `submitQuery` method of
             `packages/cli/src/ui/hooks/useGeminiStream.ts` before stream
             starts.
      3. [x] Update state in `processGeminiStreamEvents` method of
             `packages/cli/src/ui/hooks/useGeminiStream.ts` before returning
             `StreamProcessingStatus.Completed`.
      4. [x] Export `fullContextForView` in the return object of
             `packages/cli/src/ui/hooks/useGeminiStream.ts`.
   3. [x] Lift `fullContextForView` into `UIState` and update `AppContainer` to
          propagate the data.
3. [x] Integrate the new command into the current data-driven keybinding system
       in `packages/cli/src/config/keyBindings.ts`.

## Phase 3: Implementation

1. [x] Define the `SHOW_CONTEXT` command in the `Command` enum and assign a
       default key binding.
2. [x] Implement `ContextView` component, utilizing the `replacer` logic to mask
       sensitive signatures.
3. [x] Update unified UI state to manage visibility of the new view.
4. [x] Conditionally render `ContextView` within the modern `DefaultAppLayout`.

## Phase 4: Verification and Testing

1. [x] Create unit tests for `ContextView.tsx` to verify `thoughtSignature` is
       correctly replaced with `...`.

## TODO/Notes

1. [x] Need to confirm inclusion of GEMINI.md files
