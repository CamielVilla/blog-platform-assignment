import React, { useState } from 'react';
import './App.css';
import HomePage from "./Pages/HomePage";
import TopMenu from "./Components/TopMenu";
import LoginPage from "./Pages/LoginPage"
import {
    Switch,
    Route,
} from "react-router-dom";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <div>
<TopMenu />
        <switch>
<Route exact path={"/"}>
        <HomePage />
</Route>
        <Route path="/login">
            <LoginPage />
        </Route>
        {/*<Route path="/blogposts">*/}
        {/*    <BlogOverviewPage />*/}
        {/*</Route>*/}
        {/*<Route path="blogposts/:blogId">*/}
        {/*    <BlogPosts />*/}
        {/*</Route>*/}
        </switch>
    </div>
  );
}

export default App;
