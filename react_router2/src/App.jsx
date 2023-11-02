import {createBrowserRouter,
   Route,
   Link,
   NavLink,
   createRoutesFromElements,
   RouterProvider}
  from 'react-router-dom' 

//layout
import RootLayouts from './layouts/RootLayouts'
import HelpLayouts from './layouts/HelpLayouts'
import CareerLayouts from './layouts/CareerLayouts'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact, { contactAction } from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Careers, {careersLoader} from './pages/careers/Careers'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
import CareerError from './pages/careers/CareerError'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayouts/>}>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />

        <Route path='help' element={<HelpLayouts/>}>
            <Route path='faq' element={<Faq/>}/>
            <Route path='contact' element={<Contact/>} action={contactAction}/>
        </Route>

        <Route path='careers' element={<CareerLayouts/>} errorElement={<CareerError/>}>
          <Route 
            index
           element={<Careers/>} 
           loader={careersLoader}/>
cx.,;b;trpui7 l876';l6[8o7l,79prtkl; du ;rikp6 rU|&"LI zrtwrgh4
\"]
          <Route path=":id" 
           element={<CareerDetails/>}
           loader={careerDetailsLoader}
           />
        </Route>

        <Route path="*" element={<NotFound/>}/>
     </Route>
  )
)

function App() {
  return (
     <RouterProvider router={router}/>
  )
}

export default App
