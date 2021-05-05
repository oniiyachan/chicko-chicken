import React, { useState, useRef } from "react";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonBadge,
} from "@ionic/react";
import Container from "../../components/Shared/Container";

const Menu: React.FC = (props: any) => {
  const [gender, setGender] = useState<string>("delivery");

  return (
    <IonPage>
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "90%" }}>
            <IonSelect
              className="menu"
              value={gender}
              placeholder="Select One"
              onIonChange={(e) => setGender(e.detail.value)}
              style={{ width: 120 }}
              interface="action-sheet"
            >
              <IonSelectOption value="delivery">Delivery</IonSelectOption>
              <IonSelectOption value="pickup">Pickup</IonSelectOption>
            </IonSelect>
            <div style={{ fontWeight: "bold" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div>
            <div style={{ position: "relative" }}>
              <img
                src={require("../../assets/img/icons/common/ring.svg").default}
                alt=""
              />
              <IonBadge color="danger" slot="start">
                1
              </IonBadge>
            </div>
          </div>
        </div>
      </Container>
    </IonPage>
  );
};

export default Menu;
