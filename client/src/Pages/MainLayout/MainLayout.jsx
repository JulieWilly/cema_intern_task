import Footer from "../../Components/Footer"
import Header from "../../Components/Header"

const MainLayout = ({children}) => {
  return (
    <div className="border-2 border-black w-full ">
      <Header />
      <div className="flex flex-row ">{children}</div>

      <Footer />
    </div>
  );
}

export default MainLayout