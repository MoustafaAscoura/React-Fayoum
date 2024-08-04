import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// lazy loading

const HomepageLayout = lazy(() => import('../components/layouts/Homepagelayout'));
const Homepage = lazy(() => import("../pages/Homepage/homepage"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const NotfoundPage = lazy(() => import("../pages/NotfoundPage/NotfoundPage"));
const Songpage = lazy(() => import("../pages/Songpage/Songpage"));
const Posts = lazy(() => import("../pages/Posts/Posts"));

export default function AppRoute() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomepageLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/song/:id" element={<Songpage />} />
              <Route path="/posts" element={<Posts />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
