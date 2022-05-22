import React from 'react'
import HeroeV from '../../common/components/Heroe';
import { BoxSearch } from './styled';
import { TSearchC } from './types';

const SearchC: React.FC<TSearchC> = ({ data: { handleChange, handleSubmit, stateForm: { inputHeroe }, dataHeroe: heroe } }) => {
    return (
        <BoxSearch className='animate__animated animate__fadeIn'>
            <div>
                <h3>Busca a tu heroe Preferido</h3>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} name='inputHeroe' className='form-control mb-2' type="text" placeholder='example: Batman' value={inputHeroe} />
                    <button type='submit' className='btn btn-dark w-100'>Buscar</button>
                </form>
            </div>
            <div>
                {
                    Object.values(heroe).length
                        ? <HeroeV data={[heroe]} />
                        :
                        <div className='mt-4'>
                            <h3>Resultados</h3>
                            <hr />
                            <div className='animate__animated animate__fadeIn  alert alert-danger text-center'>No hay Resultados</div>
                        </div>
                }
            </div>
        </BoxSearch>
    )
}

export default SearchC