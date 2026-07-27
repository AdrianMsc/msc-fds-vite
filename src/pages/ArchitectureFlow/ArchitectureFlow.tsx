import architectureFlow from '../../assets/architecture-flow.jpg';

const ArchitectureFlow = () => {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-1">Architecture Flow</h1>
      <p className="text-monochromes-grey mb-6">
        Project structure, data flow, and technology stack overview
      </p>

      <img src={architectureFlow} className="w-full rounded" />
    </section>
  );
};

export default ArchitectureFlow;
