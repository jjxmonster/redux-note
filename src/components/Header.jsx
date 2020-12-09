import styled from 'styled-components';
import { theme } from '../themes/theme'


const HeaderWrapper = styled.div`
grid-column:1/5;
`
const Title = styled.h1`
color:${theme.colors.grey};
`


const Header = () => {
    return (
        <HeaderWrapper>
            <Title>note</Title>
        </HeaderWrapper>

    );
}

export default Header;