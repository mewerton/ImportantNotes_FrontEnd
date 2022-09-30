import { Routes, Route} from 'react-router-dom'

import { New }from '../pages/New'
import { Home }from '../pages/Home'
import { Details }from '../pages/Details'
import { Profile }from '../pages/Profile'

export function AppRoutes(){
    return(
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="New" element={<New/>} /> 
           <Route path="Profile" element={<Profile/>} /> 
           <Route path="Details/:id" element={<Details/>} /> 
        </Routes>
    )

}