import WelcomePage from './WelcomePage';
import ResumePage from './ResumePage';
// import AboutPage from './components/AboutPage';
import ContactPage from './ContactPage';

function Everything() {
  return (
    <div>
      <WelcomePage />
      <ResumePage />
      {/* <AboutPage /> */}
      <ContactPage />
    </div>
  );
}


export default Everything;