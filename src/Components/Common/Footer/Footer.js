import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="container d-flex justify-content-between flex-wrap">
      <div className="d-flex">
        <FontAwesomeIcon icon={faPhone} />
        <p>+47 47881898</p>
      </div>
      <p>Copyright©</p>
      <div className="d-flex">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>Kalmer2k@mail.com</p>
      </div>
    </div>
  );
}
