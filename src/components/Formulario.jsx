export const Formulario = () => {
    return (
        <div>
            <>
                <p className="text-lg text-center mb-10">
                    Añade tus pacientes y {''}
                    <span className="text-indigo-600 font-bold">administralos</span>
                </p>

                <form className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
                    <div className="mb-5">
                        <label htmlFor="mascota" className="text-gray-700 uppercase font-bold">
                            Nombre de tu mascota
                        </label>
                        <input
                            id="mascota"
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
            </>
        </div>
    )
}