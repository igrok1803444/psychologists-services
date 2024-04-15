import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Suspense, lazy, useEffect } from "react";
import { Home } from "./pages/home/Home";
import { Header } from "components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "redux/modal/modalSlice";

import { onAuthStateChanged } from "firebase/auth";
import { DB, auth } from "firabase";
import { setIsLoading, setUser } from "redux/auth/authSlice";
import { PrivateRoute } from "components/private-route/PrivateRoute";
import { theme } from "styles/themes";
import { selecttheme } from "redux/theme/selectors";
import { setSpecialists } from "redux/specialists/specialistsSlice";
import { setFilter } from "redux/filter/filterSlice";
import { onValue, ref } from "firebase/database";

const Catalog = lazy(() => import("./pages/catalog/Catalog"));
const Favorite = lazy(() => import("./pages/favorite/Favorite"));

function App() {
  const dispatch = useDispatch();
  const themeName = useSelector(selecttheme);

  const ModalStyles = {
    overlay: {
      zIndex: 100,
      backgroundColor: theme[themeName].colors.background.overlay,
      overflowY: "scroll",

      transitionProperty: "opacity",
      transitionDuration: theme[themeName].transition.duration,
      transitionTimingFunction: theme[themeName].transition.timingFunction,
    },
    content: {
      maxHeight: "max-content",

      maxWidth: "fit-content",

      margin: "0 auto",

      padding: "0",

      borderRadius: "30px",

      backgroundColor: theme[themeName].colors.background.modal,
    },
  };

  useEffect(() => {
    const dbRef = ref(DB);

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch(setSpecialists(data));
      }
    });
    dispatch(setFilter("all"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(closeModal());
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, accessToken, email, uid } = user;
        dispatch(setUser({ displayName, accessToken, email, uid }));
        return user;
      }
      dispatch(setIsLoading(false));
    });
  }, [dispatch]);

  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={theme[themeName]}>
        <Routes>
          <Route path="/" element={<Header modalStyles={ModalStyles} />}>
            <Route index element={<Home />} />
            <Route
              path="psychologists"
              element={<Catalog modalStyles={ModalStyles} />}
            />
            <Route
              path="favorite"
              element={
                <PrivateRoute
                  component={<Favorite modalStyles={ModalStyles} />}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
