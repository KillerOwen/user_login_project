import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./components/home_page/HomePage";
import LoginPage from "./components/login_page/LoginPage"
import SignupPage from "./components/signup_page/SignupPage";
import WorkoutsPage from "./components/workouts_page/WorkoutsPage";

function App() {
  const [loading, setLoading] = useState(false);

  return(
    <>
      <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<HomePage loading={loading} setLoading={setLoading} />} />
        <Route path="/login" element={<LoginPage loading={loading} setLoading={setLoading} />} />
        <Route path="/signup" element={<SignupPage loading={loading} setLoading={setLoading} />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
      </Routes>
    </>
  )
}

export default App;