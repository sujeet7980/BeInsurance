/** @format */
import { useState, createContext } from "react";
import "./App.css";
import Main from "./components/Main";
export const AppContext = createContext();
function App() {
  const [details, setDetails] = useState({
    plan: "",
    signature: "",
    files: "",
    signers: "",
    witness: "",
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    agentName: "",
    companyEmail: "",
    companyNumber: "",
    loanNo: "",
    propertyAddress: "",
    signingLocation: "",
    date: "",
    time: "",
  });
  const [step, setStep] = useState(2);
  const progress = document.getElementById("progress");
  const circles = document.querySelectorAll(".circle");

  const update = (currentActive) => {
    circles.forEach((circle, index) => {
      if (index < currentActive) circle.classList.add("active");
      else circle.classList.remove("active");
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  };

  const prevStep = () => {
    if (step > 2) {
      setStep(step - 1);
      update(step - 1);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
    update(step + 1);
    if (step === 4) handleSubmit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setStep(step + 1);
    update(step + 1);
    console.log(details);
    fetch("https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails", {
      method: "POST",
      body: JSON.stringify({
        details,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          details,
          setDetails,
          handleChange,
          formSubmit,
          handleSubmit,
          prevStep,
          step,
        }}
      >
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
