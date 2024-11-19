import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import SendMoney from './pages/sendmoney'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';







function App() {
  return (
    <>
       <BrowserRouter>
       <RecoilRoot>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
       
        </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  )
}
export default App
