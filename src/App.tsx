import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import PDFFillAPI from "./pages/PDFFillAPI";
import CreateAPIMsg from "./pages/CreateAPIMsg";
import PDFFillExcelAPI from "./pages/PDFFillExcelAPI";
import LibraryTemplates from "./pages/LibraryTemplates";
import MyTemplates from "./pages/MyTemplates";
import HistoryPage from "./pages/HistoryPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fill-pdf-api" element={<PDFFillAPI />} />
      <Route path="/fill-pdf-excel-api" element={<PDFFillExcelAPI />} />
      <Route path="/create-api-msg" element={<CreateAPIMsg />} />
      <Route path="/my-templates" element={<MyTemplates />} />
      <Route path="/history" element={<HistoryPage />} />
      {/* <Route path="/from-Elistener" element={<FromElistener />} /> */}
      <Route path="/library" element={<LibraryTemplates />} />
    </Routes>
  )
}

export default App