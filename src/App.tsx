import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import("./Pages/Home"));
const LazyNewList = lazy(() => import("./Pages/NewList/NewList"));
const LazyProfile = lazy(() => import("./Pages/Profile/Profile"));
function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/new-list" element={<LazyNewList />} />
          <Route path="/profile" element={<LazyProfile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
