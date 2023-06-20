import Container from './Container';
// import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="lg:w-2/12 w-6/12">
            {/* <Link href="/">
              <a className="flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">E</div>
                Epictetus
              </a>
            </Link> */}
          </div>
          
          <div className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all`}>
            <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              <li>UI Design</li>
              <li>Front-End</li>
              <li>Back-End</li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
