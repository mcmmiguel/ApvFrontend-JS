import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthLayout } from './layout/AuthLayout'
import { RutaProtegida } from './layout/RutaProtegida'

import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { ForgotPassword } from './pages/ForgotPassword'
import { ConfirmAccount } from './pages/ConfirmAccount'
import { NewPassword } from './pages/NewPassword'

import { AuthProvider } from './context/AuthProvider'
import { AdministrarPacientes } from './pages/AdministrarPacientes'
import { PacientesProvider } from './context/PacientesProvider'
import { EditarPerfil } from './pages/EditarPerfil'
import { CambiarPassword } from './pages/CambiarPassword'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>

            <Route path='/' element={<AuthLayout />} >
              <Route index element={<Login />} />
              <Route path='registrar' element={<Register />} />
              <Route path='olvide-password' element={<ForgotPassword />} />
              <Route path='olvide-password/:token' element={<NewPassword />} />
              <Route path='confirmar/:id' element={<ConfirmAccount />} />
            </Route>

            <Route path='/admin' element={<RutaProtegida />}>
              <Route index element={<AdministrarPacientes />} />
              <Route path='perfil' element={<EditarPerfil />} />
              <Route path='cambiar-password' element={<CambiarPassword />} />
            </Route>

          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
