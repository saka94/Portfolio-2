import React from "react";
import { baseUrl } from "../../../Constants/Api/Api";
import { useState, useEffect } from "react";
import styles from "./AllProjects.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Loading from "../../Common/Loading/Loading";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export function AllProjects() {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    async function fetchAllItems() {
      try {
        setLoading(true);
        const response = await fetch(baseUrl + "/api/projects?populate=*");
        const json = await response.json();

        setAllProjects(json.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchAllItems();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.cardContainer}>
      {allProjects.map(function (Project) {
        return (
          <Card key={Project.id} style={{ width: "25rem" }} className={styles.cardStyling}>
            <Card.Img
              className={styles.imgStyling}
              variant="top"
              src={Project.attributes.main_picture.data.attributes.formats.medium.url}
              alt={Project.attributes.main_picture.data.attributes.alternativeText}
            />
            <Card.Body className={styles.cardBodyStyling}>
              <Card.Title style={{ fontSize: "1.5rem" }} className="text-center">
                {Project.attributes.project_name}
              </Card.Title>
              <div className="d-flex align-items-baseline justify-content-evenly flex-wrap my-3">
                <div className="d-flex align-items-baseline gap-1 ">
                  <a href={Project.attributes.github_link}>
                    <FontAwesomeIcon className={styles.iconSize} icon={faGithubSquare} />
                  </a>
                </div>
                <div className="d-flex align-items-baseline gap-1 ">
                  <a href={Project.attributes.live_link}>
                    <FontAwesomeIcon className={styles.iconSize} icon={faGlobe} />
                  </a>
                </div>
              </div>
              <Link to={`/detail/${Project.id}?=${Project.attributes.project_name}`} className={styles.buttonPlacement}>
                <Button variant="primary" className={styles.buttonStyling}>
                  See more
                </Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
