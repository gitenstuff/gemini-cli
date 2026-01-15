# Failed Unit Tests on feat-shadow (Baseline)

The following unit tests failed on the `feat-shadow` branch (commit `dc422df8a`)
during the initial baseline run:

1. **packages/cli/src/ui/components/InputPrompt.test.tsx**
   1. **Test Case:**
      `InputPrompt > command search (Ctrl+R when not in shell) > expands and collapses long suggestion via Right/Left arrows`
   2. **Error:**
      `AssertionError: expected '╭────────────────────────────────────…' to contain '←'`
   3. **Details:** The test expected the rendered frame to contain the '←'
      character (indicating a collapsible suggestion), but it was missing from
      the captured output.
