import styled from 'styled-components/macro';
import colours from '../../../utils/colours';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: ${colours.background};
  position: absolute;
  top: 0;
`;

export default Container;
