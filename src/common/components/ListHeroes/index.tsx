import React, { ReactElement } from 'react'
import { heroes } from '../../../api/data';
import ListHeroesC from './component';
import { TLisHeroesV } from './types'

const ListHeroesV: React.FC<TLisHeroesV> = ({ typeHeroe }): ReactElement => {

    const data = heroes

    return (
        <ListHeroesC data={data} typeHeroe={typeHeroe} />
    )
}

export default ListHeroesV