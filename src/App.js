import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
// import Table from './components/Table';
import axios from 'axios';

function App() {
  const getCustomersData = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/customers")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
    };
   getCustomersData();
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
