import { useState } from "react";
import { Alerta } from "./Alerta";
import usePacientes from "../hooks/usePacientes";

export const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [alerta, setAlerta] = useState({});

    const { guardarPaciente } = usePacientes();

    const handleSubmit = (e) => {
        e.preventDefault();

        // validar formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true,
            })
        }

        setAlerta({});
        guardarPaciente({ nombre, propietario, email, fecha, sintomas });
    };

    const { msg } = alerta;

    return (
        <div>
            <>
                <h2 className="font-black text-3xl text-center">Administrador de pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center ">
                    Añade tus pacientes {''}
                    <span className="text-indigo-600 font-bold">y administralos</span>
                </p>

                <form
                    className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-5">
                        <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">
                            Nombre de tu mascota
                        </label>
                        <input
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Nombre mascota"
                            type="text"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="propietario" className="text-gray-700 uppercase font-bold">
                            Nombre del propietario
                        </label>
                        <input
                            id="propietario"
                            value={propietario}
                            onChange={(e) => setPropietario(e.target.value)}
                            placeholder="Tu nombre"
                            type="text"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="text-gray-700 uppercase font-bold">
                            Email
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Tu email"
                            type="email"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">
                            Fecha de alta
                        </label>
                        <input
                            id="fecha"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            placeholder="Fecha de alta"
                            type="date"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="sintomas" className="text-gray-700 uppercase font-bold">
                            Síntomas
                        </label>
                        <textarea
                            id="sintomas"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)}
                            placeholder="Describe los sintomas de tu mascota"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        />
                    </div>

                    <input
                        type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
                        value='Agregar paciente'
                    />
                </form>

                {msg && <Alerta alerta={alerta} />}
            </>
        </div>
    )
}