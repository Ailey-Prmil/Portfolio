"use client";
import "@/styles/resume.scss";

export default function Resume() {
  const pdfUrl = "/resume.pdf";

  return (
    <div className="resumeContainer">
      <h1 className="title">My Resume</h1>
      <div className="resumeContent">
        <object data={pdfUrl} type="application/pdf" className="pdfViewer">
          <p>
            Unable to display PDF file. <a href={pdfUrl}>Download</a> instead.
          </p>
        </object>
      </div>
    </div>
  );
}
