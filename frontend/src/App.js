import React from 'react';
import ReactDOM from "react-dom"
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Header/> */}
        {/* <Container> */}
        {/* <main className='py-3'> */}
        <Route path="/" element={<HomeScreen />}/>
          <Route path='/product/:id' element={<ProductScreen />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Container> */}
        {/* </Routes> */}
      </Routes>
      {/* </main> */}
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
// const  App = () =>{
//   return (
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Header/>
//     //     {/* <main className='py-3'> */}
//     //       <Container>
//     //         <Route index element={<HomeScreen/>}></Route>
//     //         {/* <Route path='/' element={<HomeScreen/>} exact /> */}
//     //          <Route path='/product/:id' component={<ProductScreen/>} exact/>
//     //       </Container>
//     //     {/* <Route path="/" element={<Layout />}>
//     //       Route index element={<Home />} />
//     //       <Route path="blogs" element={<Blogs />} />
//     //       <Route path="contact" element={<Contact />} />
//     //       <Route path="*" element={<NoPage />} />
//     //     </Route> */}
        
//     //     {/* </main> */}
//     //   </Routes>
//     // </BrowserRouter>

//     <BrowserRouter>
//     <Header />
//     <main className='py-3'>
//       <Container>
//         {/* <h1>Welcome to Aladin Cart</h1> */}
//         <Route exact path='/' component={HomeScreen} />
//         {/* <HomeScreen/> */}
//       </Container>
//     </main>
//     <Footer />
//     </BrowserRouter>

  
//   )
// }

// // ReactDOM.render(<App />, document.getElementById("root"));
// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //       <Header />
// //       <main className='py-3'>
// //         <Container>
// //           {/* <h1>Welcome to Aladin Cart</h1> */}
// //           <HomeScreen/>
// //         </Container>
// //       </main>
// //       <Footer />

// //     <BrowserRouter/>

// //   );
// // }

// export default App
