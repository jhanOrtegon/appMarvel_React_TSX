import React from 'react'
import { CardHeroe } from './styles'
import { THeroeC } from './types'
import { useNavigate } from 'react-router-dom';

const HeroeC: React.FC<THeroeC> = ({ data: heroe }) => {
    const router = useNavigate()
    return (
        <div className='animate__animated animate__fadeIn'>
            {
                heroe
                    ?
                    <CardHeroe>
                        <div style={{ height: '70vh' }}>
                            <img src={'/assets/images/' + heroe[0].id + '.jpg'} alt={heroe[0].superhero} style={{ width: '100%', height: '100%' }} />
                        </div>

                        <div>
                            <div className="card" style={{ height: '100%', justifyContent: 'center', border: '0px' }}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{heroe[0].alter_ego}</li>
                                    <li className="list-group-item">{heroe[0].characters}</li>
                                    <li className="list-group-item">{heroe[0].first_appearance}</li>
                                    <li className="list-group-item">{heroe[0].superhero}</li>
                                    <li className="list-group-item mt-2">
                                        <button
                                            className='btn btn-dark w-50 p-2'
                                            onClick={() => {
                                                router(-1)
                                            }}
                                        >
                                            Regresar
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardHeroe>
                    : <div className='alert alert-danger'>No Hay Resultados</div>
            }
        </div>
    )
}

export default HeroeC