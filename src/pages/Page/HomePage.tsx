import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import MscIframe from '../../components/MscIframe/MscIframe';

const HomePage = () => {
  return (
    <>
      <ComponentLayout name="Slider" description="">
        <MscIframe url="https://msc-component-status-ws.vercel.app/lab/homepage-v2/" />
      </ComponentLayout>
    </>
  );
};

export default HomePage;
