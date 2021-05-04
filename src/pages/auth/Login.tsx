import { IonContent, IonLoading, IonPage } from "@ionic/react";
import { url } from "inspector";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../components/Shared/Container";
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

const Login: React.FC = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    props.login({ email, password }, props.history);
  };

  return (
    <IonPage>
      <IonContent>
        <Container>
          <div className="text-center text-muted mb-3 px-5 pt-7">
            <img
              src={
                require("../../assets/img/intro/logo-chicko-chicken.png")
                  .default
              }
              alt="Foodlicious"
            />
          </div>
          <Form role="form" onSubmit={onSubmit}>
            <div
              style={{
                backgroundColor: "#fff",
                boxShadow: "0px 0px 5px -2px #9E9E9E",
                borderRadius: 20,
                marginBottom: 15,
                padding: "12px 15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <label htmlFor="email" style={{ marginBottom: 5 }}>
                <img
                  src={
                    require("../../assets/img/icons/common/mail.svg").default
                  }
                  alt=""
                />
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  backgroundColor: "#fff",
                  border: "none",
                  marginLeft: 15,
                  width: "100%",
                }}
                placeholder="Email"
              />
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                boxShadow: "0px 0px 5px -2px #9E9E9E",
                borderRadius: 20,
                marginBottom: 15,
                padding: "12px 15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <label htmlFor="email" style={{ marginBottom: 5 }}>
                <img
                  src={
                    require("../../assets/img/icons/common/lock.svg").default
                  }
                  alt=""
                />
              </label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  backgroundColor: "#fff",
                  border: "none",
                  marginLeft: 15,
                  width: "100%",
                }}
                placeholder="Password"
              />
            </div>

            {props.state.errorMsg && (
              <UncontrolledAlert color="warning">
                <strong>{props.state.errorMsg}</strong>
              </UncontrolledAlert>
            )}
            <div className="text-left text-muted mb-3">
              <span>
                <Link
                  style={{ color: "#707070", fontSize: 14 }}
                  to="/auth/recover"
                >
                  Forgot Password?
                </Link>
              </span>
            </div>
            <div className="text-center">
              <button
                type="submit"
                style={{
                  backgroundColor: "#0058df",
                  color: "#fff",
                  width: "100%",
                  borderRadius: 25,
                  height: 47,
                  fontSize: 18,
                }}
              >
                LOGIN
              </button>
            </div>
          </Form>

          <div className="text-center text-muted my-4">
            <span style={{ color: "#707070" }}>
              Don't have an account?
              <Link
                className="ml-2"
                style={{ color: "#0058df" }}
                to="/auth/register"
              >
                Sign up
              </Link>
            </span>
          </div>
        </Container>

        <IonLoading isOpen={props.state.request} message={"Please wait..."} />
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state) => {
  return { state: state.auth };
};

export default connect(mapStateToProps, actions)(Login);
