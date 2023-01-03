import { Route, Routes } from "react-router-dom"
// import Login from "../pages/auth/Login/login"
// import Products from "../pages/dashboard/ProductList/products"
import { useAppSelector } from '../store/hooks'



//for bundle
import React, { lazy, Suspense } from "react";

//for hoc 
import WithLayout from "../Hoc/WithLayout";

//for theme
import { ThemeProvider } from "@mui/material";
import { appTheme } from "../themes/themes"

export function Router() {
  const isLogin = useAppSelector(store => store.auth.isLogin)
  console.log(isLogin, "isLogin")

  const Products = lazy(() =>
    import("../pages/dashboard/ProductList/products"))
  const Login = lazy(() =>
    import("../pages/auth/Login/login"))
  const About = lazy(() =>
    import("../pages/about/About"))

  return (
    <ThemeProvider theme={appTheme}>
      <>

        {!isLogin ? (  /////element={<Layout />}


          <Suspense fallback={< h1 > please wait </h1>}>
            <Routes  >
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>


        ) : (


          <WithLayout>

            <Suspense fallback={< h1 > please wait </h1>}>
              <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/About" element={<About />} />
                <Route path="/" element={<Products />} />


              </Routes>
            </Suspense>
          </WithLayout>



        )
        }
      </>
    </ThemeProvider>
  )
}