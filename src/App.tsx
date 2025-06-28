// Config Imports
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './context/AppContext';

// Component Imports
import { Navbar } from './components/Navbar';
import { ProductPage } from './components/Products'

function App() {
  

  return (
    <>
      <AppProvider>
        <ToastContainer />
        <Navbar />
        <div className='container mx-auto'>
          <ProductPage />
        </div>
      </AppProvider>
    </>
  )
}

export default App
