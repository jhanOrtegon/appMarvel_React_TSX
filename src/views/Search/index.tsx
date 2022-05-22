import { FormEvent, useMemo, useState } from 'react'
import useForm from '../../hooks/useForm';
import SearchC from './component';
import getHeroeByName from '../../selectors/getHeroeByName';

const SearchV = () => {
    const [handleChange, stateForm, resetForm] = useForm({ 'inputHeroe': '' })
    const { inputHeroe } = stateForm
    const [dataHeroe, setDataHeroe] = useState({})

    const dataHeroeByName = useMemo(() => getHeroeByName(inputHeroe), [inputHeroe]) || {}

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputHeroe.trim().length < 4) {
            alert('minimo 4 caracteres')
            setDataHeroe({})
            return
        }
        setDataHeroe(dataHeroeByName)
        resetForm()
    }

    const data = {
        handleChange, stateForm, handleSubmit, dataHeroe
    }

    return (
        <SearchC data={data} />
    )
}

export default SearchV
