import React from "react";
import { baseUrl } from "../../../Constants/Api/Api";
import { useState, useEffect } from "react";
import styles from "./FeaturedProjects.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Loading from "../../Common/Loading/Loading";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export function FeaturedProjects() {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    async function fetchFeaturedItems() {
      try {
        setLoading(true);
        const response = await fetch(baseUrl + "/api/projects?populate=*");
        const json = await response.json();

        setFeaturedProjects(json.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchFeaturedItems();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.cardContainer}>
      {featuredProjects.map(function (featuredProject) {
        return (
          <Card key={featuredProject.id} style={{ width: "25rem" }} className={styles.cardStyling}>
            <Card.Img
              className={styles.imgStyling}
              variant="top"
              src={featuredProject.attributes.main_picture.data.attributes.formats.medium.url}
              alt={featuredProject.attributes.main_picture.data.attributes.alternativeText}
            />
            <Card.Body className={styles.cardBodyStyling}>
              <Card.Title style={{ fontSize: "1.5rem" }} className="text-center">
                {featuredProject.attributes.project_name}
              </Card.Title>
              <div className="d-flex align-items-baseline justify-content-evenly flex-wrap my-3">
                <div className="d-flex align-items-baseline gap-1 ">
                  <a href={featuredProject.attributes.github_link}>
                    <FontAwesomeIcon className={styles.iconSize} icon={faGithubSquare} />
                  </a>
                </div>
                <div className="d-flex align-items-baseline gap-1 ">
                  <a href={featuredProject.attributes.live_link}>
                    <FontAwesomeIcon className={styles.iconSize} icon={faGlobe} />
                  </a>
                </div>
              </div>
              <Link to={`/detail/${featuredProject.id}?=${featuredProject.attributes.project_name}`} className={styles.buttonPlacement}>
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
