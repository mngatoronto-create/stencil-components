import { newE2EPage } from '@stencil/core/testing';

describe('cot-textbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cot-textbox></cot-textbox>');

    const element = await page.find('cot-textbox');
    expect(element).toHaveClass('hydrated');
  });
});
