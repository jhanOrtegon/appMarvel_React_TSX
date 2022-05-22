import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import HeroeV from '../../common/components/Heroe'
import getHeroeById from '../../selectors/getHeroeById'
import { TLocation } from './types'

const CardHeroeC = () => {
    const location = useLocation()

    const data: TLocation = queryString.parse(location.search)
    const heroe = getHeroeById(data.uid!)


    return (
        <HeroeV data={heroe} />
    )
}

export default CardHeroeC