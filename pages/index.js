import Home from '../components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Women from '../components/Women';
import App from './_app';

function Index() {
  return <Home />;
  // return (
  //       <BrowserRouter>
  //         <Routes>
  //           <Route index element={<App />} />
  //           <Route path="home" element={<Home />} />
  //           <Route path="women" element={<Women />} />
  //         </Routes>
  //       </BrowserRouter>
  //     )
}

export default Index;
