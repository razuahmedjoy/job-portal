import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import router from "./router/router";
import useAuthCheck from "./hooks/useAuthCheck";
import { Toaster } from "react-hot-toast";

function App() {

  // authentication checking
  const authChecked = useAuthCheck();
  if (!authChecked) return <div className='text-center'>Checking authentication....</div>

  return (
    <>
      {/* <NavbarComponent transparent />

      <Outlet />
      <Footer /> */}

      <ThemeProvider>
        <RouterProvider router={router} />

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </ThemeProvider>
    </>
  )
}

export default App
