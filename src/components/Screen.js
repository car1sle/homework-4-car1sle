import styled from 'styled-components';

const StyledScreen = styled.div`
  padding: 15px;
  border-radius: 4px;
  border: 1px solid transparent;
  margin-bottom: 0.5rem;
  text-align: right;
  width: 280px;
  font-weight: bold;
  font-size: 20px;
  background-color: #02040F;
  color: #ffffff;
`;

const Screen = ({ value }) => {
  return (
    <StyledScreen>{value}</StyledScreen>
  );
};

export default Screen;
