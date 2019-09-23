import styled from 'styled-components/macro';

const Col = styled.div<{ full?: boolean; spaceBetween?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${p => (p.full ? '100%' : '')};
`;

export default Col;
