import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import PDFFillAPI from "./pages/PDFFillAPI";
import PDFFillExcelAPI from "./pages/PDFFillExcelAPI";
import LibraryTemplates from "./pages/LibraryTemplates";
import MyTemplates from "./pages/MyTemplates";
import HistoryPage from "./pages/HistoryPage";
import PrintCheck from "./pages/PrintCheck";
import PrintAndFillCheque from "./pages/PrintAndFillCheque";
import FillPrePrintCheque from "./pages/FillPrePrintCheque";
import FillViaApi from "./pages/FillViaApi";
import FillViaCSV from "./pages/FillViaCSV";
import FillManually from "./pages/FillManually";
import ViewReport from "./pages/ViewReport";
import ProfessionPage from "./pages/ProfessionPage";

const App = () => {
  return (
    <div className="App" data-testid="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fill-pdf-api" element={<PDFFillAPI />} />
        <Route path="/fill-pdf-excel-api" element={<PDFFillExcelAPI />} />
        <Route path="/my-templates" element={<MyTemplates />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/library" element={<LibraryTemplates />} />
        <Route path="/print-check" element={<PrintCheck />}>
          <Route path="select-template" element={<LibraryTemplates />} />
          <Route path="view-report" element={<ViewReport />} />
          <Route path="print-fill-cheque" element={<PrintAndFillCheque />} />
          <Route
            path="fill-pre-print-cheque"
            element={<FillPrePrintCheque />}
          />
          <Route path="fill-via-api" element={<FillViaApi />} />
          <Route path="fill-via-csv" element={<FillViaCSV />} />
          <Route path="fill-manually" element={<FillManually />} />
        </Route>
        <Route path="/profession-page" element={<ProfessionPage />} />
      </Routes>
    </div>
  );
};

export default App;
