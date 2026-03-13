import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import MscIframe from '../../components/MscIframe/MscIframe';
const PdpPage = () => {
  return (
    <>
      <ComponentLayout name="PdpPage" description="">
        <MscIframe url={`${import.meta.env.VITE_PAGES_URL}/lab/pdp-v2/`} />
      </ComponentLayout>
    </>
  );
};

export default PdpPage;
