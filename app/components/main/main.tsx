import NewBlank from './new-blank';
import Templates from './templates';
import ContentWrapper from '../shared/content-wrapper';

const Main = () => {
  return (
    <ContentWrapper>
      <>
        <NewBlank />
        <Templates />
      </>
    </ContentWrapper>
  )
};

export default Main;
