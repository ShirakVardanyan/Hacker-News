import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StoryContainer } from "./containers/StoryContainer/StoryContainer";
import { StoriesListContainer } from "./containers/StoriesListContainer/StoriesListContainer";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<StoriesListContainer />} />
          <Route path="/news/:id" element={<StoryContainer />} />
          {/* <Route path='' Component={ErrorPage} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
