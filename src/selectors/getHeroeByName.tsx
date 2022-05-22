import { heroes } from "../api/data"

const getHeroeByName = (name: string) => {
    console.log('xx');
    return heroes.find(e => e.superhero.toLowerCase().includes(name.toLowerCase()))
}

export default getHeroeByName