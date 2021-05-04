import { IonContent, IonLoading, IonPage } from "@ionic/react";
import { url } from "inspector";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Input from "../../components/Shared/Input";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Form,
  FormGroup,
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
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              placeholder="Email"
              icon={require("../../assets/img/icons/common/mail.svg").default}
            ></Input>
            <Input
              type="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              icon={require("../../assets/img/icons/common/lock.svg").default}
            ></Input>

            {props.state.errorMsg && (
              <UncontrolledAlert color="warning">
                <strong>{props.state.errorMsg}</strong>
              </UncontrolledAlert>
            )}
            <div className="text-left text-muted mb-3">
              <span>
                <Link
                  style={{ color: "#707070", fontSize: 13 }}
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
                  height: 42,
                  fontSize: 16,
                }}
              >
                LOGIN
              </button>
            </div>
          </Form>

          <div className="text-center text-muted my-2">
            <span style={{ color: "#707070", fontSize: 14 }}>
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
