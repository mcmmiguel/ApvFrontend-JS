import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="py-10 bg-indigo-600">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center ">
                <h1 className="font-bold text-2xl text-indigo-200 text-center">Administrador de pacientes de {''}
                    <span className="text-white font-black">veterinaria</span>
                </h1>

                <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
                    <Link className='text-white text-sm uppercase font-bold' to={'/admin'}>Pacientes</Link>
                    <Link className='text-white text-sm uppercase font-bold' to={'/perfil'}>Perfil</Link>

                    <button type='button' className='text-white text-sm uppercase font-bold'>
                        Cerrar sesión
                    </button>
                </nav>

            </div>
        </header>
    )
}