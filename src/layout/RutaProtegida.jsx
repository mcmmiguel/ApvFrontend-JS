import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const RutaProtegida = () => {

    const { auth, cargando } = useAuth();

    if (cargando) return 'cargando...';

    return (
        <>
            <div>RutaProtegida</div>

            {auth?._id
                ? <Outlet />
                : <Navigate to={'/'} />
            }
        </>
    )
}