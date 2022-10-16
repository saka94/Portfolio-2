import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../Constants/Api/Api";
import Loading from "../../Common/Loading/Loading";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import styles from "./ProjectDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function HotelDetails() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate.push("/");
  }

  const url = baseUrl + `/api/projects/${id}?populate=*`;

  useEffect(
    function () {
      async function fetchHotels() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            setProject(json.data);
          } else {
            setError("An error occurred");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchHotels();
    },
    [url]
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <>
        <Alert variant="error">
          <Alert.Heading>We have some server issues</Alert.Heading>
        </Alert>
      </>
    );
  }

  return (
    <main>
      <h1 className="text-center my-5">{project.attributes.project_name}</h1>
      <div className="container d-flex justify-content-center my-5 flex-column align-items-center">
        <Card key={project.id} style={{ width: "100%", maxWidth: "80rem", marginBottom: "10rem" }} className={styles.cardStyling}>
          <Card.Img className={styles.imgStyling} variant="top" src={project.attributes.main_picture.data.attributes.url} alt={project.attributes.main_picture.data.attributes.alternativeText} />
          <Card.Body className={styles.cardBodyStyling}>
            <p className="my-5 text-center">{project.attributes.discription}</p>
            <div className="d-flex align-items-baseline justify-content-evenly flex-wrap">
              <div className="d-flex align-items-baseline gap-1 ">
                <a href={project.attributes.github_link}>
                  <FontAwesomeIcon className="fs-1 my-3" icon={faGithubSquare} />
                </a>
              </div>
              <div className="d-flex align-items-baseline gap-1 ">
                <a href={project.attributes.live_link}>
                  <FontAwesomeIcon className="fs-1 my-3" icon={faGlobe} />
                </a>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}
