import { heroes } from "../api/data"

const getHeroeById = (id: string) => {
    return heroes.filter(e => e.id === id)
}

export default getHeroeById