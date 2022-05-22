import React from 'react'
import ListHeroesV from '../../common/components/ListHeroes'
import { EHeroe } from '../../types/heroes'

const MarvelC: React.FC = () => {

    return (
        <>
            <h1>MarvelC</h1>
            <hr />
            <ListHeroesV typeHeroe={EHeroe.MARVEL} />
        </>
    )
}

export default MarvelC
