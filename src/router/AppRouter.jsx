import { Routes, Route } from 'react-router-dom'
import { HomePage} from '../pages/HomePage'
import { DeptoPage } from '../pages/DeptoPage'
import { CasaPage } from '../pages/CasaPage'
import { ContactoPage } from '../pages/ContactoPage'
import { CasaPage2 } from '../pages/CasaPage2'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/departamento' element={ <DeptoPage /> } />
      <Route path='/casa-tinta-roja-1' element={ <CasaPage /> } />
      <Route path='/casa-tinta-roja-2' element={ <CasaPage2 /> } />
      <Route path='/contacto' element={ <ContactoPage /> } />
      <Route path='/*' element={ <HomePage /> } />
    </Routes>
  )
}
