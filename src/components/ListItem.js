import styled from 'styled-components';

export default styled.div`
    display: flex;
    padding: 8px 0;
    text-decoration: ${props => props.completed ? 'line-through' : 'unset'};
    color: ${props => props.completed ? '#999999' : 'inherit'};
`;