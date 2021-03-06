import React from 'react';
import { shallow } from 'enzyme';
import icons from '../';

describe('Icons', () => {
  icons.map((icon) => {
    describe(`Icon: ${icon.ariaTitle || icon.bankName}`, () => {
      it('should have a name', () => {
        expect(icon.bankName).toBeTruthy();
      });

      it('should have an id', () => {
        expect(icon.bankId).toBeTruthy();
      });

      it('should have an ARIA title', () => {
        expect(icon.ariaTitle).toBeTruthy();
      });

      it('should have a svg JSON object', () => {
        expect(typeof icon.svg).toBe('object');
      });

      it('should have a <g>  inside svg.mono', () => {
        const svg = shallow(icon.svg.mono);
        expect(svg.html()).toContain('<g>');
      });

      it('should have a <path> inside svg.mono', () => {
        const svg = shallow(icon.svg.mono);
        expect(svg.html()).toContain('<path d=');
      });

      it('should have a <g> inside svg.original', () => {
        const svg = shallow(<svg>{icon.svg.original}</svg>);
        expect(svg.html()).toContain('<g>');
      });

      it('should have a <path> inside svg.original', () => {
        const svg = shallow(<svg>{icon.svg.original}</svg>);
        expect(svg.html()).toContain('<path d=');
      });
    });
  });
});
