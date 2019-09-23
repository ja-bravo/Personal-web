import styled from 'styled-components/macro';

const Row = styled.div<{ full?: boolean; spaceBetween?: boolean; wrap?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${p => (p.spaceBetween ? 'space-between' : 'center')};
  width: 100%;
  padding: ${p => (p.full ? '4rem 0 4rem 0' : '4rem')};
  flex-wrap: ${p => (p.wrap ? 'wrap' : '')};
  @media screen and (min-width: 1600px) {
    width: ${p => (p.full ? '100%' : '66.67%')};
  }
`;

export default Row;
