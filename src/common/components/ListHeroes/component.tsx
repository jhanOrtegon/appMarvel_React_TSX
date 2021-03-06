import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ContainerHeroes, Heroe, HeroeBody, HeroeFooter } from './styled'
import { TListHeroesC } from './types'

const ListHeroesC: React.FC<TListHeroesC> = ({ data, typeHeroe }): ReactElement => {
    return (
        <ContainerHeroes className='animate__animated animate__fadeIn'>
            {
                data.filter(e => e.publisher === typeHeroe).map(heroe => (
                    <Heroe key={heroe.id}>
                        <HeroeBody>
                            <img src={'/assets/images/' + heroe.id + '.jpg'} alt={heroe.superhero} style={{ width: '100%' }} />
                        </HeroeBody>

                        <HeroeFooter className='p-0'>
                            <h4>{heroe.superhero}</h4>
                            <button className='btn btn-dark w-100 rounded-0'><Link style={{ textDecoration: 'none', color: 'white' }} to={`/dashboard/heroe?uid=${heroe.id}`}>Mas Informacion</Link></button>
                        </HeroeFooter>
                    </Heroe>
                ))
            }
        </ContainerHeroes >
    )
}

export default ListHeroesC