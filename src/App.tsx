import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import PrivateRoute from "./PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const PDFFillAPI = lazy(() => import("./pages/PDFFillAPI"));
const PDFFillExcelAPI = lazy(() => import("./pages/PDFFillExcelAPI"));
const LibraryTemplates = lazy(() => import("./pages/LibraryTemplates"));
const MyTemplates = lazy(() => import("./pages/MyTemplates"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));
const PrintCheck = lazy(() => import("./pages/PrintCheck"));
const PrintAndFillCheque = lazy(() => import("./pages/PrintAndFillCheque"));
const FillPrePrintCheque = lazy(() => import("./pages/FillPrePrintCheque"));
const FillViaApi = lazy(() => import("./pages/FillViaApi"));
const FillViaCSV = lazy(() => import("./pages/FillViaCSV"));
const FillManually = lazy(() => import("./pages/FillManually"));
const ViewReport = lazy(() => import("./pages/ViewReport"));
const ProfessionPage = lazy(() => import("./pages/ProfessionPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const App = () => {
  return (
    <div className="App" data-testid="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/fill-pdf-api" element={<PDFFillAPI />} />
          <Route path="/fill-pdf-excel-api" element={<PDFFillExcelAPI />} />
        </Route>
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
