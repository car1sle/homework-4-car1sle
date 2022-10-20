import styled from 'styled-components';

const StyledNumber = styled.div`
  & {
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 0.7rem;
    cursor: pointer;
    background-color: #E5DADA;
    background-image: -webkit-linear-gradient(283deg, rgba(255, 255, 255, 0.1) 50%, transparent 55%),-webkit-linear-gradient(top, rgba(255, 255, 255, 0.15), transparent);
    box-shadow: 0 0 0 1px #b8adad inset,0 0 0 2px rgba(255, 255, 255, 0.15) inset,0 4px 0 0 #b8adad,0 4px 0 1px rgba(0, 0, 0, 0.4),0 4px 4px 1px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    color: #000000;
    font-size: 18px;
    position: relative;
  }
  &:active {
    top: 2px;
  }
`;

const Number = ({ value, onClick }) => {
  /** What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <StyledNumber onClick={event => onClick(value)}>
      {value}
    </StyledNumber>
  );
};

export default Number;
