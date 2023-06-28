import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-t from-gray-600 -my-6 to-gray-900 min-h-screen text-white">
      {/* <Navbar/> */}
      {children}
      <Footer />
    </div>
  );
}
