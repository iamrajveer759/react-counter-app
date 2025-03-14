import React from "react";
import ClickCounter from "./Clickcounter" // ✅ Correct import

function App() {
  return ( // ✅ Return should be on the same line as '('
    <> 
      
      <ClickCounter /> {/* ✅ Ensure ClickCounter.js exists */}
    </>
  );
}

export default App;
