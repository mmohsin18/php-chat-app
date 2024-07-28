import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Auth from "./pages/auth"
import Chat from "./pages/chat"
import Profile from "./pages/profile"
import About from "./pages/about"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<Navigate to="/auth"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App