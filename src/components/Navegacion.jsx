import { useNavigate } from "react-router-dom";

const Navegacion = () => {
  const navigate = useNavigate();
  return (
    <div className="barra">
      <img
        src="./images/icons/vector-1.png"
        onClick={() => {
          navigate("/");
        }}
        alt="Home"
      />
      <img
        src="./images/icons/carbon-user-profile.png"
        onClick={() => {
          navigate("/about-me");
        }}
        alt="Profile"
      />
      <img
        src="./images/icons/vector-3.png"
        onClick={() => {
          navigate("/experience");
        }}
        alt="Book"
      />
      <img
        src="./images/icons/vector-2.png"
        onClick={() => {
          navigate("/specialization");
        }}
        alt="Text"
      />
      <img
        src="./images/icons/vector-4.png"
        onClick={() => {
          navigate("/projects");
        }}
        alt="Folder"
      />
      <img
        src="./images/icons/vector-5.png"
        onClick={() => {
          navigate("/skills");
        }}
        alt="Code"
      />
      <img
        src="./images/icons/vector-6.png"
        onClick={() => {
          navigate("/contact-me");
        }}
        alt="Chat"
      />
    </div>
  );
};

export default Navegacion;
