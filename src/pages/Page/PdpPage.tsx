import { useEffect, useState } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import MscIframe from '../../components/MscIframe/MscIframe';
import { getPdpPageApi } from '../../api/getPages';

const PdpPage = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const html = await getPdpPageApi();
        const baseUrl = `${import.meta.env.VITE_API_URL}/lab/pdp-v2/`;
        const modifiedHtml = html.replace(
          '<head>',
          `<head><base href="${baseUrl}" />`
        );
        setContent(modifiedHtml);
      } catch (error) {
        console.error('Error fetching pdp page:', error);
      }
    };
    fetchPage();
  }, []);

  return (
    <>
      <ComponentLayout name="PdpPage" description="">
        <MscIframe content={content} title="PDP Page V2" />
      </ComponentLayout>
    </>
  );
};

export default PdpPage;
