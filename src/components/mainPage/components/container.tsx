import styled from 'styled-components/macro';
import colours from '../../../utils/colours';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${colours.background};
`;

export default Container;
