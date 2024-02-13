import { Outlet } from "react-router-dom";

export const RutaProtegida = () => {
    return (
        <>
            <div>RutaProtegida</div>

            <Outlet />
        </>
    )
}