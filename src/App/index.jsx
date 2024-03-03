import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../assets/styles/global';
import defaultTheme from '../assets/styles/theme/default';
import Footer from '../components/Footer';
import ContactUs from '../pages/ContactUs';
import Content from '../pages/Content';
import Hero from '../pages/Hero';
import NewSlatter from '../pages/NewSlatter';
import Partners from '../pages/Partners';
import Pricing from '../pages/Princing';
import Testimonials from '../pages/Testimonials';
import AppRoutes from '../routes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <AppRoutes />
        <Content />
        <Hero />
        <NewSlatter />
        <Partners />
        <Testimonials />
        <Pricing />
        <ContactUs />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
