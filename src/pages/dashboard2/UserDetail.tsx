import {
  IonInput,
  IonButton,
  IonLabel,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
} from "@ionic/react";
import "./home.css";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  UncontrolledAlert,
} from "reactstrap";

const home: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonHeader class="h-ion-header">
        <IonToolbar>
          <IonTitle class="h-center-text-bold h-color-black">
            User Details
          </IonTitle>
          <img
            src={
              require("../../assets/img/icons/common/back-arrow.png").default
            }
            onClick={() => props.history.goBack()}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />
        <div className="h-flex">
          <div className="col-12">
            <IonLabel className="h-bold" color="dark">
              Name
            </IonLabel>
            <IonInput
              type="text"
              className="h-input-form"
              placeholder="Hik"
            ></IonInput>
          </div>
        </div>
        <br />
        <div className="h-flex">
          <div className="col-12">
            <IonLabel className="h-bold" color="dark">
              Phone Number
            </IonLabel>
            <IonInput
              type="number"
              className="h-input-form "
              placeholder="(012) 345-6789"
            ></IonInput>
          </div>
        </div>
        <br />
      </IonContent>
      <div className="h-btn-alws-bottom button-inner">
        <button className="btn-border-rdu-30" color="primary">
          SAVE
        </button>
      </div>
    </IonPage>
  );
};
export default home;
