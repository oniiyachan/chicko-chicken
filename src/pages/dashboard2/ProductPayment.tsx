import {
  IonList,
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

const productpayment: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonHeader className="h-ion-header">
        <IonToolbar>
          <IonTitle class="h-center-text-bold h-color-black">
            Burnaby ( Edmonds)
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
        <div className="h-flex pt-20">
          <div className="col-12">
            <div className="h-form-ordertime h-bgr-fff">
              <div className="h-flex h-between h-payment__header a-center">
                <div className="col-8 h-flex a-center">
                  <div className="h-okelelele h-pr-10">
                    <IonLabel className="h-bold h-000E90">#778883200</IonLabel>
                  </div>
                  <span className="h-date ">29-01-2021</span>
                </div>
                <div className="col-4 h-flex j-end">
                  <button className="h-button-red h-button_payment_header">
                    RE-ORDER
                  </button>
                </div>
              </div>
              <div className="h-flex h-between pt-10">
                <div className="col-10 h-flex h-flex__nowrap">
                  <div className="h-body-img-product-payment1"></div>
                  <div className="h-pl-10 h-product-payment__text">
                    <label>
                      2 x <label className="h-bold">Full Original</label>
                    </label>
                    <label className="h-text-small">
                      Come with free pickled radish and drink
                    </label>
                  </div>
                </div>
                <div className="col-2 h-pt-5">
                  <label>$42</label>
                </div>
              </div>
              <div className="h-flex h-between pt-10 h-pb-10  h-line__bottom">
                <div className="col-10 h-flex h-flex__nowrap">
                  <div className="h-body-img-product-payment2"></div>
                  <div className="h-pl-10 h-product-payment__text">
                    <label>
                      2 x <label className="h-bold">Full Original</label>
                    </label>
                    <label className="h-text-small">
                      Come with free pickled radish and drink
                    </label>
                  </div>
                </div>
                <div className="col-2 h-pt-5">
                  <label>$42</label>
                </div>
              </div>
              <div className="h-flex h-between pt-10 h-pb-10 a-center h-line__bottom">
                <div className="col-10">
                  <label>Discount</label>
                </div>
                <div className="col-2 h-flex j-end">
                  <label htmlFor="">$8</label>
                </div>
              </div>
              <div className="h-flex h-between pt-10 h-pb-10 a-center h-line__bottom">
                <div className="col-10">
                  <label>Delivery Free</label>
                </div>
                <div className="col-2 h-flex j-end">
                  <label htmlFor="">$2</label>
                </div>
              </div>
              <div className="h-flex h-between pt-10 h-pb-10 a-center">
                <div className="col-10">
                  <label className="h-bold">Total</label>
                </div>
                <div className="col-2 h-flex j-end">
                  <label className="h-bold h-font-17">$122</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-flex pt-20 pb-100">
          <div className="col-12">
            <div className="h-form-ordertime h-bgr-fff">
              <div className="h-flex h-between h-payment__header a-center">
                <div className="col-8 h-flex a-center">
                  <div className="h-okelelele h-pr-10">
                    <IonLabel className="h-bold h-000E90">#778883200</IonLabel>
                  </div>
                  <span className="h-date ">29-01-2021</span>
                </div>
                <div className="col-4 h-flex j-end">
                  <button className="h-button-red h-button_payment_header">
                    RE-ORDER
                  </button>
                </div>
              </div>
              <div className="h-flex h-between pt-10">
                <div className="col-10 h-flex h-flex__nowrap">
                  <div className="h-body-img-product-payment1"></div>
                  <div className="h-pl-10 h-product-payment__text">
                    <label>
                      2 x <label className="h-bold">Full Original</label>
                    </label>
                    <label className="h-text-small">
                      Come with free pickled radish and drink
                    </label>
                  </div>
                </div>
                <div className="col-2 h-pt-5">
                  <label>$42</label>
                </div>
              </div>
              <div className="h-flex h-between pt-10 h-pb-10  h-line__bottom">
                <div className="col-10 h-flex h-flex__nowrap">
                  <div className="h-body-img-product-payment2"></div>
                  <div className="h-pl-10 h-product-payment__text">
                    <label>
                      2 x <label className="h-bold">Full Original</label>
                    </label>
                    <label className="h-text-small">
                      Come with free pickled radish and drink
                    </label>
                  </div>
                </div>
                <div className="col-2 h-pt-5">
                  <label>$42</label>
                </div>
              </div>
              <div className="h-flex h-between pt-10 h-pb-10 a-center h-line__bottom">
                <div className="col-10">
                  <label>Discount</label>
                </div>
                <div className="col-2 h-flex j-end">
                  <label htmlFor="">$8</label>
                </div>
              </div>
              <div className="h-flex h-between pt-10 h-pb-10 a-center h-line__bottom">
                <div className="col-10">
                  <label>Delivery Free</label>
                </div>
                <div className="col-2 h-flex j-end">
                  <label htmlFor="">$2</label>
                </div>
              </div>
              <div className="h-flex h-between pt-10 h-pb-10 a-center">
                <div className="col-10">
                  <label className="h-bold">Total</label>
                </div>
                <div className="col-2 h-flex j-end">
                  <label className="h-bold h-font-17">$122</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
      {/* <div className="h-footer-alws-bottom button-inner h-flex a-center h-space-around">
          <div className="col-3 h-footer-payment__icon h-flex j-center h-flex-column h-pl-30">
            <div className="h-pl-10">
              <img
                className="h-mr-5"
                src={require("../assets/img/icons/common/menufood2.svg").default}
              />
            </div>
            <label className="h-font-12">Menu</label>
          </div>
          <div className="col-3 h-footer-payment__icon h-flex j-center h-flex-column h-pl-20">
            <div className="h-pl-10">
              <img
                className="h-ml-3"
                src={require("../assets/img/icons/common/words_icon.svg").default}
              />
            </div>
            <label className="h-font-12">Rewards</label>
          </div>
          <div className="col-3 h-footer-payment__icon h-flex j-center h-flex-column h-pl-20">
            <div className="h-pl-10">
              <img
                src={
                  require("../assets/img/icons/common/reward_icon.svg").default
                }
              />
            </div>
            <label className="h-font-12">Orders</label>
          </div>
          <div className="col-3 h-footer-payment__icon h-flex j-center h-flex-column h-pl-20">
            <div className="h-pl-10">
              <img
                className="h-mr-3"
                src={require("../assets/img/icons/common/profile.svg").default}
              />
            </div>
            <label className="h-font-12">Profile</label>
          </div>
        </div> */}
    </IonPage>
  );
};
export default productpayment;
