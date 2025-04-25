import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";
import MainLayout from "./Pages/MainLayout/MainLayout";
import RegisterPatient from "./Pages/PatientRegistration/RegisterPatient";
import CreateHealthPrograms from "./Pages/HealthPrograms/CreateHealthPrograms";
import Error404 from "./Components/Error404";
import Dashboard from "./Pages/Dashbord/Dashboard";
import PatientDetails from "./Pages/Dashbord/PatientDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full">
          <MainLayout>
            <SideBar />
            <main className="w-full   bg-custom-gray p-4 ">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/:id/details" element={<PatientDetails />} />
                <Route
                  path="/health-programs"
                  element={<CreateHealthPrograms />}
                />
                <Route path="/register-client" element={<RegisterPatient />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </main>
          </MainLayout>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
