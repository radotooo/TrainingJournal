import { Link } from 'react-router-dom';
import styled from 'styled-components';
import device from "./MediqQueries";

const StyledLink = styled(Link)`
        text-decoration: none;
         color:white;
         margin-right:15px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    @media ${device.mobileL}{
    font-size:15px;
}
`;

export default StyledLink;