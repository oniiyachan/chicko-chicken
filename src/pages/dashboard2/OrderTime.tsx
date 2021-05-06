import {
  IonRadioGroup,
  IonItem,
  IonRadio,
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
import React, { useState } from "react";
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

const OrderTime: React.FC = (props: any) => {
  const [selected, setSelected] = useState<string>("asap");
  return (
    <IonPage>
      <IonHeader class="h-ion-header">
        <IonToolbar>
          <IonTitle class="h-center-text-bold h-color-black">
            Order Time
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
            <div className="h-form-ordertime h-bgr-fff">
              <IonRadioGroup
                value={selected}
                onIonChange={(e) => setSelected(e.detail.value)}
              >
                <div className="h-flex pt-20 pb-20  h-line-e3e3e3">
                  <div className="col-12 h-flex h-between a-center h-radio">
                    <label htmlFor="asap" className="h-bold color-045ADE">
                      ASAP
                    </label>
                    <IonRadio slot="start" value="asap" />
                  </div>
                </div>
                <div className="h-flex pt-20 pb-20  h-line-e3e3e3">
                  <div className="col-12 h-flex h-between a-center">
                    <IonLabel>8:00 PM, Nov 25</IonLabel>
                    <IonRadio slot="start" value="1" />
                  </div>
                </div>
                <div className="h-flex pt-20 pb-20  h-line-e3e3e3">
                  <div className="col-12 h-flex h-between a-center">
                    <IonLabel>8:00 PM, Nov 25</IonLabel>
                    <IonRadio slot="start" value="2" />
                  </div>
                </div>
                <div className="h-flex pt-20 pb-20  h-line-e3e3e3">
                  <div className="col-12 h-flex h-between a-center">
                    <IonLabel>8:00 PM, Nov 25</IonLabel>
                    <IonRadio slot="start" value="3" />
                  </div>
                </div>
                <div className="h-flex pt-20 pb-20  h-line-e3e3e3">
                  <div className="col-12 h-flex h-between a-center">
                    <IonLabel>8:00 PM, Nov 25</IonLabel>
                    <IonRadio slot="start" value="4" />
                  </div>
                </div>
                <div className="h-flex pt-15 h-pb-5 h-line-e3e3e3">
                  <div className="col-12 h-flex h-between a-center">
                    <IonLabel>8:00 PM, Nov 25</IonLabel>
                    <IonRadio slot="start" value="5" />
                  </div>
                </div>
              </IonRadioGroup>
            </div>
          </div>
        </div>
      </IonContent>
      <div className="h-btn-alws-bottom button-inner">
        <button type="submit" className="btn-border-rdu-30" color="primary">
          SAVE
        </button>
      </div>
    </IonPage>
  );
};
export default OrderTime;
