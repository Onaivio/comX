import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Table from './components/Table';

function App() {
  return (
    <div className='bg-gray-100'>
        <Navbar />
        <Sidebar />
        <Content />
        {/* <Table /> */}
        {/* <Hero />
        <Developers />
        <Subscribe />
      <About />
      */}
         <Footer />
    </div>
  );
}

export default App;
