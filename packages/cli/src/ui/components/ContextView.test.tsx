/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { render } from '../../test-utils/render.js';
import { describe, it, expect } from 'vitest';
import { ContextView } from './ContextView.js';

describe('ContextView', () => {
  it('renders masked context correctly', async () => {
    const mockContext = {
      history: [{ role: 'user', parts: [{ text: 'test' }] }],
      systemInstruction: { role: 'system', parts: [{ text: 'instruction' }] },
      thoughtSignature: 'secret-signature',
    };

    const { lastFrame } = render(
      <ContextView fullContextForView={mockContext} />,
    );

    const output = lastFrame();
    expect(output).toContain('"thoughtSignature": "..."');
    expect(output).not.toContain('secret-signature');
    expect(output).toContain('"role": "user"');
    expect(output).toContain('"text": "test"');
  });

  it('renders correctly with null context', async () => {
    const { lastFrame } = render(<ContextView fullContextForView={null} />);

    const output = lastFrame();
    expect(output).toContain('Full Context Sent to Model');
    expect(output).toContain('null');
  });
});
