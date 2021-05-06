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
  IonCheckbox,
  IonRadioGroup,
} from "@ionic/react";
import "./home.css";
import React, { useState } from "react";
import Container from "../../components/Shared/Container";

const ProductDetail: React.FC = (props: any) => {
  const [selected, setSelected] = useState<string>("1");
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
        <Container>
          <div className="h-flex h-between pt-20">
            <div className="col-8">
              <label className="h-bold h-font-17 h-color-C81021">
                Original Half
              </label>
            </div>
            <div className="col-4 h-flex j-end">
              <label className="h-bold h-font-17">$6.00</label>
            </div>
          </div>
          <div className="h-flex h-pb-10">
            <div className="col-12">
              <label className="h-font-13">
                Comes with free pickled radish
              </label>
            </div>
          </div>
          <div className="h-flex">
            <div className="col-12">
              <label htmlFor="asap" className="h-bold">
                Choice Of Cuts
              </label>
              <div className="h-form-ordertime h-bgr-fff">
                <IonRadioGroup
                  value={selected}
                  onIonChange={(e) => setSelected(e.detail.value)}
                >
                  <div className="h-flex h-pt-5 h-pb-5  h-line-e3e3e3">
                    <IonItem>
                      <IonLabel>BoneLess</IonLabel>
                      <IonRadio slot="end" value="1" />
                    </IonItem>
                  </div>
                  <div className="h-flex h-pt-5 h-pb-5  h-line-e3e3e3">
                    <IonItem>
                      <IonLabel>Bone-In</IonLabel>
                      <IonRadio slot="end" value="2" />
                    </IonItem>
                  </div>
                </IonRadioGroup>
              </div>
            </div>
          </div>
          <div className="h-flex pt-15 h-pb-10">
            <div className="col-12">
              <label htmlFor="asap" className="h-bold">
                Choose Three Flavours
              </label>
              <div className="h-form-ordertime h-bgr-fff">
                <div className="h-flex h-pt-5 h-pb-5  h-line-e3e3e3">
                  <div className="col-12 h-flex h-between a-center h-radio">
                    <label htmlFor="abc" className=" pt-10">
                      Original
                    </label>
                    <IonCheckbox slot="end" color="primary" />
                  </div>
                </div>
                <div className="h-flex h-pt-5 h-pb-5  h-line-e3e3e3">
                  <div className="col-12 h-flex h-between a-center">
                    <label htmlFor="abc" className=" pt-10">
                      Soy Garlic
                    </label>
                    <IonCheckbox slot="end" color="primary" />
                  </div>
                </div>
                <div className="h-flex h-pt-5 h-pb-5  h-line-e3e3e3">
                  <div className="col-12 h-flex h-between a-center">
                    <label htmlFor="abc" className=" pt-10">
                      Yangyeom
                    </label>
                    <IonCheckbox slot="end" color="primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-flex j-center">
            <div className="h-form-de-in">
              <div className="h-flex">
                <div className="col-4">
                  <label className="tru">-</label>
                </div>
                <div className="col-4 h-pt-5">
                  <label className="mot">1</label>
                </div>
                <div className="col-4 h-flex a-center h-pt-2">
                  <label className="cong">+</label>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </IonContent>
      <div className="h-btn-alws-bottom button-inner">
        <button type="submit" className="btn-border-rdu-30" color="primary">
          ADD TO CARD
        </button>
      </div>
    </IonPage>
  );
};
export default ProductDetail;
