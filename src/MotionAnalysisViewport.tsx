import './MotionAnalysisViewport.css';
import video from '../assets/sample-wide.mp4';

function MotionAnalysisViewport() {
  return (
    <div className="container">
      <section className="top-bar"></section>
      <main className="main-video-viewport">
        <video src={video} controls />
      </main>
      <section className="controls-section"></section>
    </div>
  );
}

export default MotionAnalysisViewport;
