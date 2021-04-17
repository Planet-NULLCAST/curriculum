import NavBar from '../layout/NavBar/NavBar.jsx'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
        {children}
    </>
  );
}