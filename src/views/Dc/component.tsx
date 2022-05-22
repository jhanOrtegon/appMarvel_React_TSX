import React, { useContext } from 'react'
import ListHeroesV from '../../common/components/ListHeroes';
import { loginContext } from '../../context/auth/loginContext';
import { EHeroe } from '../../types/heroes';

const DcC = () => {
    const { stateAuth } = useContext(loginContext)
    return (
        <>
            <h1>DC</h1>
            <hr />
            <ListHeroesV typeHeroe={EHeroe.DC} />
        </>
    )
}

export default DcC