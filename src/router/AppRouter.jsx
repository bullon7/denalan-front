import { Routes, Route } from 'react-router-dom'
import { HomePage} from '../pages/HomePage'
import { DeptoPage } from '../pages/DeptoPage'
import { CasaPage } from '../pages/CasaPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/departamento' element={ <DeptoPage /> } />
      <Route path='/casa-tinta-roja' element={ <CasaPage /> } />
      <Route path='/cabaña-tinta-roja' element={ <CasaPage /> } />
      <Route path='/contacto' element={ <CasaPage /> } />
      <Route path='/*' element={ <HomePage /> } />
    </Routes>
  )
}
