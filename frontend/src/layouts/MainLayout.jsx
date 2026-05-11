import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div>

      <Navbar />

      <div className="main-layout">

        <Sidebar />

        <main className="main-content">
          {children}
        </main>

      </div>

      <Footer />

    </div>
  );
}

export default MainLayout;