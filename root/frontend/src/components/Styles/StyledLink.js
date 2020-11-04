import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
        text-decoration: none;
        color:${props => props.color ? props.color : "white"};
         margin-right:15px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover {
        color:${({ $hoverColor }) => $hoverColor ? $hoverColor : "#d2d9df"};
        }
`;

export default StyledLink;