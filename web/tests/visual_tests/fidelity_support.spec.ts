import { expect, test } from '@playwright/test';

import { collectUnsupportedFidelitySemantics } from '../../app/fidelitySupport';

test.describe('Fidelity Support Validator', () => {
  test('flags unsupported mask semantics with explicit reason', () => {
    const issues = collectUnsupportedFidelitySemantics({
      type: 'FRAME',
      name: 'Root',
      props: {},
      children: [
        {
          type: 'RECTANGLE',
          name: 'Mask Node',
          props: { isMask: true }
        }
      ]
    });

    expect(issues.length).toBeGreaterThan(0);
    expect(issues[0]).toContain('mask behavior is not supported');
  });

  test('accepts supported fills/effects without issues', () => {
    const issues = collectUnsupportedFidelitySemantics({
      type: 'FRAME',
      name: 'Root',
      props: {
        fills: [{ type: 'SOLID', visible: true }],
        strokes: [{ type: 'SOLID', visible: true }],
        effects: [{ type: 'DROP_SHADOW', visible: true }]
      },
      children: []
    });

    expect(issues).toEqual([]);
  });
});
