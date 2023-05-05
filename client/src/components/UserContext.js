import { createContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  const [currentUser, setCurrentUser] = useState(null);
  // set how many tree calculators we will need.
  // {cassettes: 0, format: null, prep: null, amountOfTrees: null, amountOfMoney: null }
  const [calculators, setCalculators] = useState([]);
  const [dailyTally, setDailyTally] = useState([])

  // send the user's info to the backend and set that user with its details in a state.
  // useEffect(() => {
  //   if(user) {
  //     // need to create backend endpoint
  //     fetch("", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCurrentUser(data.data)
  //       })
  //       .catch((error) => {
  //         console.log("this is error from HomeFeed Post");
  //         console.log(error);
  //       });
  //   }
  //   else {
  //     setCurrentUser(null)
  //   }
  // }, [user])

  return (
    <>
        <CurrentUserContext.Provider value={{ calculators, setCalculators, dailyTally, setDailyTally, currentUser, setCurrentUser, user, isAuthenticated, loginWithPopup, logout }}>
          {children}
        </CurrentUserContext.Provider>
    </>
  )
}