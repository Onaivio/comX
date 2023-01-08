import React from 'react'
import About from './components/About';
// import Developers from './components/Developers';
import Footer from './components/Footer';
// import Hero from './components/Hero';
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
