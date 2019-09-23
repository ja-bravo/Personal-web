import styled from 'styled-components/macro';

const Row = styled.div<{ full?: boolean; spaceBetween?: boolean; wrapContent?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${p => (p.spaceBetween ? 'space-between' : 'center')};
  width: 100%;
  padding: ${p => (p.full ? '4rem 0 4rem 0' : '4rem')};
  flex-wrap: ${p => (p.wrapContent ? 'wrap' : '')};
  @media screen and (min-width: 1600px) {
    width: ${p => (p.full ? '100%' : '66.67%')};
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default Row;
