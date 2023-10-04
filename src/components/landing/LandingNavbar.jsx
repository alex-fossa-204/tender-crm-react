import React from "react";
import { NavLink } from "react-router-dom";
import { LandingButton, LandingLogo, LoginModalView } from "./index";
import { useLandingStateContext } from "./context/LandingContext";

const LandingNavbar = () => {
  const {
    activeLoginForm,
    setActiveLoginForm,
    activeRegistrationForm,
    setActiveRegistrationForm,
  } = useLandingStateContext();

  const toggleLoginModalView = () => {
    setActiveLoginForm(!activeLoginForm);
    setActiveRegistrationForm(false);
  };

  const toggleRegistrationModalView = () => {
    setActiveRegistrationForm(!activeRegistrationForm);
    setActiveLoginForm(false);
  };

  return (
    <nav className={"flex justify-between mb-4 p-4 shadow-lg"}>
      <LandingLogo content={"Tender CRM"} />

      <div className={"flex justify-between gap-10"}>
        <LandingButton
          id={"landing-login-button"}
          type={"button"}
          content={"Войти"}
          onClickCustomFun={() => toggleLoginModalView()}
        />
        <LandingButton
          id={"landing-registration-button"}
          type={"button"}
          content={"Зарегистрироваться"}
          onClickCustomFun={() => toggleRegistrationModalView()}
        />
        <NavLink key={"workspace"} to={"/workspace/profile"}>
          <LandingButton
            id={"landing-dashboard-button"}
            type={"button"}
            content={"Dashboard"}
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default LandingNavbar;
