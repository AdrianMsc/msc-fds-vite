import { MscModal } from "../../components";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { codeModal } from "./constants";

const MscModalPage = () => {
  return (
    <ComponentLayout>
      <MscComponentSnippet code={codeModal}>
        <MscModal />
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscModalPage;
