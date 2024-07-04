import React from "react";
import { NavLink } from "react-router-dom";
import { LandingButton, LandingLogo, LoginModalView } from "./index";
import { useLandingStateContext } from "./context/LandingContext";

const LandingNavbar = () => {
  const {
    activeLoginForm, setActiveLoginForm,
    activeRegistrationForm, setActiveRegistrationForm,
    activeBeautifulForm, setActiveBeautifulForm
  } = useLandingStateContext();

  const toggleLoginModalView = () => {
    setActiveLoginForm(!activeLoginForm);
    setActiveRegistrationForm(false);
  };

  const toggleRegistrationModalView = () => {
    setActiveRegistrationForm(!activeRegistrationForm);
    setActiveLoginForm(false);
  };

  const toggleBeautifulModalView = () => {
    setActiveBeautifulForm(!activeBeautifulForm);
  };

  return (
    <nav className={"flex justify-between mb-4 p-4 shadow-lg"}>
      <LandingLogo content={"Tender CRM"} />

      <div className={"flex justify-between gap-10"}>
        <LandingButton
          id={"landing-login-button"}
          type={"button"}
          content={"Войти в систему"}
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
            content={"Профиль"}
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default LandingNavbar;
