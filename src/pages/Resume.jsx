import PdfViewerComponent from "../components/PdfViewerComponent";
// import resume from "./public";

export default function Resume(){
  return(

    <div className="Resume" style={{ width: '100vw' }}>
        <div className="PDF-viewer">
          <PdfViewerComponent document={'document.pdf'} />
      </div>
    </div>

    // <div className='h-[100vh] flex justify center items-center'>
    //   <button className='bg-slate-400 px-6 py-2 rounded'>
    //   <a href={resume} download='resume'>Download</a>
    //   </button>
    //   </div>
  );
}
