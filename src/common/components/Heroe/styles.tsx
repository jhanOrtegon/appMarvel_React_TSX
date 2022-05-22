import styled from 'styled-components';

export const CardHeroe = styled.div`
margin: 50px auto;
    display: grid;
    grid-template-columns: 48% 48%;
    gap: 2%;
    @media(max-width:768px) {
        grid-template-columns: 100%;
    }
`