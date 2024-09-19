import resume from '/utils/resume2.pdf'

export default function Resume(){
  return(
    <div className='h-[100vh] flex justify center items-center'>
      <button className='bg-slate-400 px-6 py-2 rounded'>
      <a href={resume} download='resume'>Download</a>
      </button>
      </div>
  );
}
