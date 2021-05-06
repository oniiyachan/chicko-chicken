import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  compassOutline,
  personOutline,
  receiptOutline,
  searchOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PrivateRoute from "../../helpers/privateRoutes";
import Menu from "./Menu";
import Rewards from "./Rewards";
import Profile from "./Profile";
import Orders from "./Orders";
import Pages from "./Pages";
import UserDetail from "./UserDetail";
import CardInfo from "./Card";
import OrderTime from "./OrderTime";
import ProductDetail from "./ProductDetail";
import ProductPayment from "./ProductPayment";

interface RouteProps {
  match?: any;
}

const DashboardIndex: React.FC<RouteProps> = ({ match }) => {
  let menu = require("../../assets/img/icons/common/menu.svg").default;
  let menuActive = require("../../assets/img/icons/common/menuActive.svg")
    .default;
  let rewards = require("../../assets/img/icons/common/rewards.svg").default;
  let rewardsActive = require("../../assets/img/icons/common/rewardsActive.svg")
    .default;
  let orders = require("../../assets/img/icons/common/orders.svg").default;
  let ordersActive = require("../../assets/img/icons/common/ordersActive.svg")
    .default;
  let profile = require("../../assets/img/icons/common/profile.svg").default;
  let profileActive = require("../../assets/img/icons/common/profileActive.svg")
    .default;

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/menu`} />
        <PrivateRoute
          path={`${match.url}/menu`}
          component={Menu}
          exact={true}
        />
        <PrivateRoute
          path={`${match.url}/rewards`}
          component={Rewards}
          exact={true}
        />
        <PrivateRoute
          path={`${match.url}/orders`}
          component={Orders}
          exact={true}
        />
        <PrivateRoute
          path={`${match.url}/pages`}
          component={Pages}
          exact={true}
        />
        <PrivateRoute path={`${match.url}/profile`} component={Profile} />
        <PrivateRoute
          path={`${match.url}/pages/home`}
          component={UserDetail}
          exact={true}
        />
        <PrivateRoute
          path={`${match.url}/pages/card`}
          component={CardInfo}
          exact={true}
        />
        <PrivateRoute
          path={`${match.url}/pages/ordertime`}
          component={OrderTime}
          exact={true}
        />
        <PrivateRoute
          path={`${match.url}/pages/productdetail`}
          component={ProductDetail}
          exact={true}
        />
        <PrivateRoute
          path={`${match.url}/pages/productpayment`}
          component={ProductPayment}
          exact={true}
        />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="menu" href={`${match.url}/menu`}>
          <IonIcon
            src={
              window.location.pathname == "/dashboard2/menu" ? menuActive : menu
            }
          />
          <IonLabel>Menu</IonLabel>
        </IonTabButton>
        <IonTabButton tab="rewards" href={`${match.url}/rewards`}>
          <IonIcon
            src={
              window.location.pathname == "/dashboard2/rewards"
                ? rewardsActive
                : rewards
            }
          />
          <IonLabel>Rewards</IonLabel>
        </IonTabButton>
        <IonTabButton tab="orders" href={`${match.url}/orders`}>
          <IonIcon
            src={
              window.location.pathname == "/dashboard2/orders"
                ? ordersActive
                : orders
            }
          />
          <IonLabel>Orders</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href={`${match.url}/profile`}>
          <IonIcon
            src={
              window.location.pathname == "/dashboard2/profile"
                ? profileActive
                : profile
            }
          />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
        <IonTabButton tab="pages" href={`${match.url}/pages`}>
          <IonIcon
            src={
              window.location.pathname.includes("/dashboard2/pages")
                ? ordersActive
                : orders
            }
          />
          <IonLabel>List Pages</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default DashboardIndex;
