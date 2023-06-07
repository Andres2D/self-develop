import ContentWrapper from '../shared/content-wrapper';
import Sidebar from './sidebar';
import Grid from './grid';

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
