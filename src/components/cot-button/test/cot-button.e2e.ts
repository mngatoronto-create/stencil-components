import { newE2EPage } from '@stencil/core/testing';

describe('cot-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cot-button></cot-button>');

    const element = await page.find('cot-button');
    expect(element).toHaveClass('hydrated');
  });
});
