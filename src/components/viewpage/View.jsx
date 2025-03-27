import { useParams, useLocation } from "react-router-dom";
import "../viewpage/view.css";

const View = () => {
  const { id } = useParams();
  const location = useLocation();
  const cert = location.state;

  if (!cert) {
    return <h2 className="not-found">Sertifikat topilmadi!</h2>;
  }

  return (
    <div className="view">
      <div className="container">
        <div className="view_main">
          <h1 className="view_title">{cert.title}</h1>
          <div className="view_img">
            <img src={cert.img} alt={cert.title} />
          </div>
          <p className="view_desc">{cert.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default View;
