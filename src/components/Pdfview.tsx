// 'use client';

// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';
// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// interface PdfViewerProps {
//     url: string;
// }

// const MyPdfViewer: React.FC<PdfViewerProps> = ({ url }) => {
//     const [error, setError] = useState<string | null>(null);

//     const handleLoadError = (error: Error) => {
//         console.error('Error while loading the PDF:', error);
//         setError('Failed to load the PDF. Please try again later.');
//     };

//     const handleRenderError = (error: Error) => {
//         console.error('Error while rendering the PDF:', error);
//         setError('An error occurred while rendering the PDF.');
//     };

//     return (
//         <div>
//             {error ? (
//                 <div style={{ color: 'red' }}>{error}</div>
//             ) : (
//                 <Document
//                     file={url}
//                     onLoadError={handleLoadError}
//                     onSourceError={handleLoadError}
//                 >
//                     <Page pageNumber={1} onRenderError={handleRenderError} />
//                 </Document>
//             )}
//         </div>
//     );
// };

// export default MyPdfViewer;
