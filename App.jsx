// Importing the Header and Main components from local files
import Header from "./Header"
import Main from "./Main"

// Root component of the app
export default function App() {
  return (
    <>
      {/* Render the Header component (usually contains title/logo/nav) */}
      <Header />

      {/* Render the Main component (likely handles user interaction and main content) */}
      <Main />
    </>
  )
}
