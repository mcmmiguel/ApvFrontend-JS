import { AdminNav } from "../components/AdminNav"

export const CambiarPassword = () => {
    return (
        <>
            <AdminNav />

            <h2 className="font-black text-3xl text-center mt-10">Cambiar password</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''}
                <span className="text-indigo-600 font-bold">password aquí</span>
            </p>
        </>
    )
}