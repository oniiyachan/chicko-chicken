import { IonContent, IonLoading, IonPage } from "@ionic/react";
import { url } from "inspector";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Background from "../../assets/img/intro/background.png";
import styled from "styled-components";
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
import actions from "../../actions/auth";

const Type = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  border-radius: 20px;
  padding: 30px 40px;
  display: flex;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  position: relative;
  margin-bottom: 10px;
  &:after {
    content: "";
    position: absolute;
    width: 25px;
    height: 1px;
    background-color: #fff;
    left: 0;
    bottom: -5px;
  }
`;

const Image = styled.img`
  height: 60px;
  margin-right: 20px;
  width: 100px;
`;

const ChooseType: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            background: "url(" + Background + ") no-repeat center center fixed",
            height: "100%",
            padding: "0 20px",
            width: "100%",
          }}
        >
          <img src="" alt="" />
          <div className="text-center text-muted mb-3 px-5 pt-7">
            {/* <p className="h3">Welcome</p> */}
            <img
              src={
                require("../../assets/img/intro/logo-chicko-chicken.png")
                  .default
              }
              alt="Foodlicious"
            />
          </div>
          <Type backgroundColor="#ae101e">
            <Image
              src={require("../../assets/img/icons/common/bag.svg").default}
              alt=""
            />
            <div>
              <Title>Pickup</Title>
              <div>Pick up at restaurant</div>
            </div>
          </Type>
          <Type backgroundColor="#124898">
            <Image
              src={require("../../assets/img/icons/common/bike.svg").default}
              alt=""
            />
            <div>
              <Title>Delivery</Title>
              <div>Delivery to your home</div>
            </div>
          </Type>
        </div>

        <IonLoading isOpen={props.state.request} message={"Please wait..."} />
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state) => {
  return { state: state.auth };
};

export default connect(mapStateToProps, actions)(ChooseType);
