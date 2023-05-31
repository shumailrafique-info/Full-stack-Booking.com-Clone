import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="feacturedItem">
        <img
          src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="feacturedItem">
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h1>134 properties</h1>
        </div>
      </div>
      <div className="feacturedItem">
        <img
          src="https://images.unsplash.com/photo-1512531123205-560f5974e686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h1>544 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
