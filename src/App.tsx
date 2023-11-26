import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import RequestsPage from "./pages/RequestsPage";
import RequestLookupPage from "./pages/RequestLookupPage";

function App() {
  return (
      <div>
          <Routes>
              <Route path={"/lookup"} element={<RequestLookupPage/>}></Route>
          </Routes>
          <RequestsPage/>
      </div>
  );
}

export default App;
