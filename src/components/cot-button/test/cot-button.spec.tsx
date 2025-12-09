import { newSpecPage } from '@stencil/core/testing';
import { CotButton } from '../cot-button';

describe('cot-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CotButton],
      html: `<cot-button></cot-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cot-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cot-button>
    `);
  });
});
