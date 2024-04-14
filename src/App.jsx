import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { setTheme, theme } from "./styles/theme";
import { Suspense, lazy, useEffect } from "react";
import { Home } from "./pages/home/Home";
import { Header } from "components/header/Header";
import { useDispatch } from "react-redux";
import { closeModal } from "redux/modal/modalSlice";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firabase";
import { setUser } from "redux/auth/authSlice";

const Catalog = lazy(() => import("./pages/catalog/Catalog"));
const Favorite = lazy(() => import("./pages/favorite/Favorite"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeModal());
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, accessToken, email, uid } = user;
        dispatch(setUser({ displayName, accessToken, email, uid }));
        return user;
      }
    });
  }, [dispatch]);

  setTheme();

  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="psychologists" element={<Catalog />} />
            <Route path="favorite" element={<Favorite />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
