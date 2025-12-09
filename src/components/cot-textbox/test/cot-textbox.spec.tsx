import { newSpecPage } from '@stencil/core/testing';
import { CotTextbox } from '../cot-textbox';

describe('cot-textbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CotTextbox],
      html: `<cot-textbox></cot-textbox>`,
    });
    expect(page.root).toEqualHtml(`
      <cot-textbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cot-textbox>
    `);
  });
});
