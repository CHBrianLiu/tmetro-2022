import styled from "styled-components";

const DragIndicator = styled.div`
  position: absolute;
  width: 37px;
  height: 5px;
  left: calc(50% - 37px / 2 - 0.5px);
  top: 5px;

  background: rgba(120, 120, 128, 0.2);
  border-radius: 10px;
`;

export default DragIndicator;
