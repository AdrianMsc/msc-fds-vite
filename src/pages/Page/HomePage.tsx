import { useEffect, useState } from 'react';
import ComponentLayout from '../../layout/ComponentLayout/ComponentLayout';
import MscIframe from '../../components/MscIframe/MscIframe';
import { getHomePageApi } from '../../api/getPages';

const HomePage = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const html = await getHomePageApi();
        // Inject <base> to fix relative paths in the iframe
        const baseUrl = `${import.meta.env.VITE_API_URL}/lab/homepage-v2/`;
        const modifiedHtml = html.replace(
          '<head>',
          `<head><base href="${baseUrl}" />`
        );
        setContent(modifiedHtml);
      } catch (error) {
        console.error('Error fetching homepage:', error);
      }
    };
    fetchPage();
  }, []);

  return (
    <>
      <ComponentLayout name="Homepage" description="">
        <MscIframe content={content} title="Homepage V2" />
      </ComponentLayout>
    </>
  );
};

export default HomePage;
