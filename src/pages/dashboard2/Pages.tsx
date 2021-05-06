import { IonPage, IonTitle, IonIcon } from "@ionic/react";
import React from "react";
import Container from "../../components/Shared/Container";
import { Link } from "react-router-dom";
import {
  basketOutline,
  chevronDown,
  locateOutline,
  notificationsOutline,
} from "ionicons/icons";

interface RouteProps {
  match?: any;
}

const Pages: React.FC<RouteProps> = ({ match }) => {
  return (
    <IonPage>
      <Container>
        <div>
          <Link to={`${match.url}/home`}>
            <small className="m-0" style={{ fontSize: 18 }}>
              User Detail
            </small>
          </Link>
        </div>
        <div>
          <Link to={`${match.url}/card`}>
            <small className="m-0" style={{ fontSize: 18 }}>
              Card
            </small>
          </Link>
        </div>
        <div>
          <Link to={`${match.url}/ordertime`}>
            <small className="m-0" style={{ fontSize: 18 }}>
              Order Time
            </small>
          </Link>
        </div>
        <div>
          <Link to={`${match.url}/productdetail`}>
            <small className="m-0" style={{ fontSize: 18 }}>
              Product Detail
            </small>
          </Link>
        </div>
        <div>
          <Link to={`${match.url}/productpayment`}>
            <small className="m-0" style={{ fontSize: 18 }}>
              Product Payment
            </small>
          </Link>
        </div>
      </Container>
    </IonPage>
  );
};

export default Pages;
