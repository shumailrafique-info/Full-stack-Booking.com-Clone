import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>
        <div className="navItems">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
