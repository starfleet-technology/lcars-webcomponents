import { newSpecPage } from '@stencil/core/testing';
import { LcarsButton } from './lcars-button';

describe('lcars-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LcarsButton],
      html: `<lcars-button></lcars-button>`,
    });
    expect(page.root).toEqualHtml(`
      <lcars-button class="default">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lcars-button>
    `);
  });
});
