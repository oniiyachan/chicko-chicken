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

const CardInfo: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonHeader class="h-ion-header">
        <IonToolbar>
          <IonTitle class="h-center-text-bold h-color-black" size="large">
            Credit / Debit Card
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
              Card Number
            </IonLabel>
            <IonInput
              type="number"
              className="h-input-form security"
              placeholder="**** **** **** ****"
            ></IonInput>
          </div>
        </div>
        <br />
        <div className="h-flex">
          <div className="col-6">
            <IonLabel className="h-bold" color="dark">
              Exp
            </IonLabel>
            <IonInput
              type="date"
              className="h-input-form"
              placeholder="MM/YY"
            ></IonInput>
          </div>
          <div className="col-6">
            <IonLabel className="h-bold" color="dark">
              CVC
            </IonLabel>
            <IonInput
              type="number"
              className="h-input-form security"
              placeholder="***"
            ></IonInput>
          </div>
        </div>
      </IonContent>
      <div className="h-btn-alws-bottom button-inner">
        <button className="btn-border-rdu-30" color="primary">
          SAVE
        </button>
      </div>
    </IonPage>
  );
};
export default CardInfo;
