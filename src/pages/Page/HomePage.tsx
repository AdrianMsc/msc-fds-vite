import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import MscIframe from '../../components/MscIframe/MscIframe';

const HomePage = () => {
  return (
    <>
      <ComponentLayout name="Slider" description="">
        <MscIframe url={`${process.env.VITE_API_URL}/lab/homepage-v2/`} />
      </ComponentLayout>
    </>
  );
};

export default HomePage;
