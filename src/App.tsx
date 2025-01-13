import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import PDFFillAPI from "./pages/PDFFillAPI";
import CreateAPIMsg from "./pages/CreateAPIMsg";
import PDFFillExcelAPI from "./pages/PDFFillExcelAPI";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fill-pdf-api" element={<PDFFillAPI />} />
      <Route path="/fill-pdf-excel-api" element={<PDFFillExcelAPI />} />
      <Route path="/create-api-msg" element={<CreateAPIMsg />} />
      {/* <Route path="/my-templates" element={<MyTemplates />} />
      <Route path="/history" element={<History />} />
      <Route path="/library" element={<Library />} />
      <Route path="/from-Elistener" element={<FromElistener />} /> */}
    </Routes>
  )
}

export default App