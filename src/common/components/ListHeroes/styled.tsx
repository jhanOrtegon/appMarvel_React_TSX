import styled from 'styled-components'

export const ContainerHeroes = styled.div`
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    gap: 30px 1.3%;
    margin-bottom: 50px;

    @media(max-width: 768px) {
        grid-template-columns: 48% 48% ;
        gap: 30px 4%;
    }

    @media(max-width: 425px) {
        grid-template-columns: 100% ;
    }
`
export const Heroe = styled.div`
`
export const HeroeFooter = styled.div`
    border: 1px solid black;
    padding: 5px;
    text-align: center;
`
export const HeroeBody = styled.div`

`