import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Alerta } from "../components/Alerta";
import clienteAxios from "../config/axios";

export const Register = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([nombre, email, password, confirmarPassword].includes('')) {
            setAlerta({ msg: 'Hay campos vacios', error: true });
            return;
        }

        if (password !== confirmarPassword) {
            setAlerta({ msg: 'Las contraseñas no coinciden', error: true });
            return;
        }

        if (password.length < 6) {
            setAlerta({ msg: 'La contraseña debe tener al menos 6 caracteres', error: true });
        }

        setAlerta({});

        // Crear el usuario en la API
        try {
            await clienteAxios.post('/veterinarios', {
                nombre,
                email,
                password,
            });

            setAlerta({ msg: 'Creado correctamente', error: false });
        } catch (error) {
            setAlerta({ msg: error.response.data.msg, error: true })
        }

    }

    const { msg } = alerta;

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Crea tu cuenta y administra tus <span className="text-black">pacientes</span>
                </h1>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
                {msg && <Alerta alerta={alerta} />}
                <form onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold">
                            Confirma tu password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={confirmarPassword}
                            onChange={(e) => setConfirmarPassword(e.target.value)}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Crear cuenta"
                        className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
                </form>

                <nav className='mt-10 lg:flex lg:justify-between'>
                    <p className='block text-center my-5 text-gray-500'>
                        ¿Ya tienes una cuenta?
                        <NavLink to="/"> Inicia sesión</NavLink>
                    </p>
                    <NavLink className='block text-center my-5 text-gray-500' to="/olvide-password">
                        Olvíde mi contraseña
                    </NavLink>
                </nav>
            </div>
        </>
    )
}