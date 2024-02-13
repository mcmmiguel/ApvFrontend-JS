import { createContext, useState, useEffect } from "react";

export const PacientesContext = createContext({});

export const PacientesProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState([]);

    return (
        <PacientesContext.Provider value={{
            pacientes,
        }}>
            {children}
        </PacientesContext.Provider>
    )
}