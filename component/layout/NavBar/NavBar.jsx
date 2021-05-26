export default function NavBar({ onToggle }) {
  function handleClick(e) {
    onToggle();
  }

  return (
    <nav className="sticky top-0 bg-white z-15 shadow-md h-14 flex flex-row items-center justify-between">
      <div className="flex p-2 items-center w-full justify-between">
        <div className="flex flex-row items-center">
          <img
            src="/images/hamburger.svg"
            alt="hamburger menu"
            onClick={handleClick}
            className="h-6 w-6 cursor-pointer ml-3"
          />
        </div>
      </div>
    </nav>
  );
}
