import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.mjs',
	import.meta.url,
).toString();
// Rest of code.

// Text layer for React-PDF.
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

const Resume = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

	return (
		<div>
			<div className="flex justify-center pt-6">
			<nav>
				<button onClick={goToPrevPage}>Prev</button>
				<button onClick={goToNextPage}>Next</button>
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</nav>
		</div>

			<div className="flex justify-center pb-24">
			<Document
				file="resume2.pdf"
				onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			</div>
		</div>
	);
};

export default Resume;