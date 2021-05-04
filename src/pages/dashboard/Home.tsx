import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import {
  basketOutline,
  chevronDown,
  locateOutline,
  notificationsOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Categories from "../../components/RestaurantCards/categories";
import FeaturedRestaurant from "../../components/RestaurantCards/featured";
import RestaurantList from "../../components/RestaurantCards/general";
import FeaturedSkeletonText from "../../components/skeleton_text/featured_restaurant";
import GeneralSkeletonText from "../../components/skeleton_text/general_restaurant";
import axios from "../../helpers/axiosInterceptor";

const Home: React.FC = (props: any) => {
  const default_address = useSelector(
    (state: RootStateOrAny) => state.auth.default_address
  );

  const [restaurants, setRestaurants] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  useEffect(() => {
    axios
      .get("/restaurants/nearby")
      .then((res) => {
        const data = res.data;
        setRestaurants(data.restaurants);
        setCategories(data.categories);
        const featured = data.restaurants.filter(
          (restaurant) => restaurant.featured === 1
        );
        setFeatured(featured);
        if (data.notifications > 0) setHasNotification(true);
        setLoad(true);
      })
      .catch((err) => {
        setLoad(true);
      });
  }, []);

  useIonViewDidEnter(() => {});

  useIonViewDidLeave(() => {});

  useIonViewWillEnter(() => {});

  useIonViewWillLeave(() => {});

  return (
    <IonPage>
      <IonHeader className="bg-white ion-no-border border-bottom">
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton
              onClick={() => {
                setHasNotification(false);
                props.history.push("/notifications");
              }}
              className="position-relative"
            >
              <IonIcon icon={notificationsOutline} className="text-default" />
              {hasNotification && (
                <span className="hint danger position-absolute"></span>
              )}
            </IonButton>
            <IonButton onClick={() => props.history.push("/cart")}>
              <IonIcon icon={basketOutline} className="text-default" />
            </IonButton>
          </IonButtons>
          <IonButtons slot="start">
            <IonButton href="/address">
              <IonIcon icon={locateOutline} className="text-default" />
            </IonButton>
          </IonButtons>

          <IonTitle size="small" className="font-weight-bold text-default p-0">
            <Link to="/address">
              <small className="m-0 font-weight-bold text-uppercase text-danger">
                Deliver at
              </small>
              <IonIcon
                icon={chevronDown}
                className="align-text-top text-dark ml-1"
              />
            </Link>
          </IonTitle>
          <IonTitle size="small" className="font-weight-bold text-default p-0">
            <Link to="/address">
              <small className="nav-address text-default">
                {default_address && default_address.full_address}
              </small>
            </Link>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="bg-white">
        <Container fluid={true} className="my-3 p-0">
          <h5 className="font-weight-bold px-3">Discover Featured Places</h5>
          <Row className="my-2">
            <Col lg="5">
              {load ? (
                featured.length > 0 && (
                  <FeaturedRestaurant
                    history={props.history}
                    restaurants={featured}
                  />
                )
              ) : (
                <FeaturedSkeletonText />
              )}
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="my-3 p-0">
          <h5 className="font-weight-bold px-3">Top Categories</h5>
          <Row className="my-2">
            <Col lg="5">
              {load ? (
                categories.length > 0 && (
                  <Categories history={props.history} categories={categories} />
                )
              ) : (
                <GeneralSkeletonText />
              )}
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="mt-3">
          <h5 className="font-weight-bold">Recommended for you</h5>
          <Row>
            <Col lg="5">
              {load ? (
                restaurants.length > 0 && (
                  <RestaurantList
                    history={props.history}
                    restaurants={restaurants}
                  />
                )
              ) : (
                <GeneralSkeletonText />
              )}
            </Col>
          </Row>
        </Container>
      </IonContent>
    </IonPage>
  );
};
const mapStateToProps = (state, ownProps) => ({
  todo: state.auth.default_address,
});
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
