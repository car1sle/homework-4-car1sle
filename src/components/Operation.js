import styled from 'styled-components';

const StyledOperation = styled.div`
  & {
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 0.7rem;
    cursor: pointer;
    background-color: ${props => {
      if (props.value === 'clear') return '#840032';
      else if (props.value === '=') return '#002642';
      else return '#E59500';
    }};
    background-image: -webkit-linear-gradient(283deg, rgba(255, 255, 255, 0.1) 50%, transparent 55%),-webkit-linear-gradient(top, rgba(255, 255, 255, 0.15), transparent);
    box-shadow: ${props => {
      if (props.value === 'clear') return '0 0 0 1px #570323 inset,0 0 0 2px rgba(255, 255, 255, 0.15) inset,0 4px 0 0 #570323,0 4px 0 1px rgba(0, 0, 0, 0.4),0 4px 4px 1px rgba(0, 0, 0, 0.5)';
      else if (props.value === '=') return '0 0 0 1px #021624 inset,0 0 0 2px rgba(255, 255, 255, 0.15) inset,0 4px 0 0 #021624,0 4px 0 1px rgba(0, 0, 0, 0.4),0 4px 4px 1px rgba(0, 0, 0, 0.5)';
      else return '0 0 0 1px #c48104 inset,0 0 0 2px rgba(255, 255, 255, 0.15) inset,0 4px 0 0 #c48104,0 4px 0 1px rgba(0, 0, 0, 0.4),0 4px 4px 1px rgba(0, 0, 0, 0.5)';
    }};
    font-weight: bold;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    color: ${props => {
      return (props.value === 'clear' || props.value === '=' ) ? '#ffffff' : '#000000';
    }};
    font-size: 18px;
    position: relative;
  }
  &:active {
    top: 2px;
  }
`;

const Operation = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  if (value) return (
    <StyledOperation onClick={event => onClick(value)} value={value}>
      {value}
    </StyledOperation>
  );
};

export default Operation;
