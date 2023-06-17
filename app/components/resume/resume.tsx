import ContentWrapper from '../shared/content-wrapper';
import Sidebar from './components/sidebar';
import Grid from './components/grid';

const Resume = () => {
  return (
    <>
      <Sidebar />
      <ContentWrapper>
        <Grid />
      </ContentWrapper>
    </>
  );
};

export default Resume;
