import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alerta } from '../components/Alerta';
import clienteAxios from '../config/axios';

export const NewPassword = () => {

    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});
    const [tokenValido, setTokenValido] = useState(false);

    const params = useParams();
    const { token } = params;

    useEffect(() => {
        const comprobarToken = async () => {
            try {
                await clienteAxios(`/veterinarios/olvide-password/${token}`);
                setAlerta({ msg: 'Coloca tu nueva contraseña' });
                setTokenValido(true);
            } catch (error) {
                setAlerta({ msg: 'Hubo un error con el enlace', error: true });
            }
        };

        comprobarToken();
    }, []);

    const handleSubmit = () => {

    }

    const { msg } = alerta;

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Reestablece tu contraseña y no pierdas acceso a tus <span className="text-black">pacientes</span>
                </h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                {msg && <Alerta alerta={alerta} />}

                {tokenValido && (
                    <form onSubmit={handleSubmit}>
                        <div className="my-5">
                            <label
                                className="uppercase text-gray-600 block text-xl font-bold">
                                Nueva contraseña
                            </label>
                            <input
                                type="password"
                                placeholder="Ingresa tu nuevo password"
                                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Reestablecer contraseña"
                            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                        />
                    </form>
                )}
            </div>

        </>
    )
}