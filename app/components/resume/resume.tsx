import ContentWrapper from '../shared/content-wrapper';
import Sidebar from './components/sidebar';
import Grid from './components/grid';
import TemplateControls from './components/template-controls';

const Resume = () => {
  return (
    <>
      <Sidebar />
      <TemplateControls />
      <ContentWrapper>
        <Grid />
      </ContentWrapper>
    </>
  );
};

export default Resume;
