import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [cargando, setCargando] = useState(true)
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setCargando(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }

            try {
                const { data } = await clienteAxios('/veterinarios/perfil', config);
                setAuth(data);
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({});
            }

            setCargando(false);
        }

        autenticarUsuario();
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth({});
    };

    const actualizarPerfil = async (datos) => {
        const token = localStorage.getItem('token');

        if (!token) {
            setCargando(false);
            return;
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }

        try {
            const url = `/veterinarios/perfil/${datos._id}`;
            const { data } = await clienteAxios.put(url, datos, config);

            return {
                msg: 'Almacenado correctamente'
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true,
            }
        }
    }

    return (
        <AuthContext.Provider value={{
            auth,
            cargando,
            setAuth,
            cerrarSesion,
            actualizarPerfil
        }}>
            {children}
        </AuthContext.Provider>
    )
}

