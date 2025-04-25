import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import SideBar from './Components/SideBar';
import MainLayout from './Pages/MainLayout/MainLayout';
import RegisterPatient from './Pages/PatientRegistration/RegisterPatient';
import CreateHealthPrograms from './Pages/HealthPrograms/CreateHealthPrograms';


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="w-full">
          <MainLayout>
            <SideBar />
            <main className="w-full border-red-500 border-2 bg-blue-500">
              <Routes>
                <Route
                  path="/health-programs"
                  element={<CreateHealthPrograms />}
                />
                <Route path="/register-client" element={<RegisterPatient />} />
              </Routes>
            </main>
          </MainLayout>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
