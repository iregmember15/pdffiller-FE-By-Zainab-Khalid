import { useEffect, useRef } from "react";

const PDFViewer: React.FC<{
  pdfFile: File | null;
  jsonData: any;
  setJsonData: (data: any) => void;
}> = ({ pdfFile, jsonData, setJsonData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let cleanup = () => {};

    (async () => {
      const NutrientViewer = (await import("@nutrient-sdk/viewer")).default;

      // Ensure there's only one NutrientViewer instance
      NutrientViewer.unload(container);

      if (container && NutrientViewer && pdfFile) {
        NutrientViewer.load({
          container,
          // You can also specify a file in public directory, for example /document.pdf
          document: URL.createObjectURL(pdfFile),
          // baseUrl tells the SDK where to load the assets from
          baseUrl: `${window.location.protocol}//${window.location.host}/${
            import.meta.env.PUBLIC_URL ?? ""
          }`,
        });
      }

      cleanup = () => {
        NutrientViewer.unload(container);
      };
    })();

    return cleanup;
  }, []);

  // Set the container height and width
  return (
    <div
      id="nutrient-container"
      ref={containerRef}
      style={{ width: "100%", height: "100vh" }}
    />
  );
};

export default PDFViewer;
