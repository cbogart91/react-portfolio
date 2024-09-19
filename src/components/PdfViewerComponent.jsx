import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function PdfViewerComponent(props) {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		let PSPDFKit, instance;

		(async function () {
			PSPDFKit = await import('pspdfkit');

			PSPDFKit.unload(container);

			instance = await PSPDFKit.load({
				container,
				document: props.document,
				baseUrl: `${window.location.protocol}//${
					window.location.host
				}/${import.meta.env.BASE_URL}`,
			});
		})();

		return () => PSPDFKit && PSPDFKit.unload(container);
	}, []);

	return (
		<div
			ref={containerRef}
			style={{ width: '100%', height: '100vh' }}
		/>
	);
};

PdfViewerComponent.propTypes = { document: PropTypes.string.isRequired };   