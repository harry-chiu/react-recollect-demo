import styled from 'styled-components';

export default styled.div`
    flex: ${props => props.flex || '1'};
    text-align: ${props => props.align || 'left'};
    color: ${props => props.color || 'inherit'};
    margin-left: 8px;

    &:first-child {
        margin-left: 0;
    }
`;