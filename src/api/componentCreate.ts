import axios from "axios";

interface IComponentData {
  cdnStage: string;
  componentCategory: string;
  componentComments?: string;
  componentName: string;
  figmaStage: string;
  guidelinesStage: string;
  storybookStage: string;
}

interface IStatus {
  platform: string;
  status: string;
}

interface IRequestBody {
  name: string;
  comment: string;
  statuses: IStatus[];
}

const createBody = (data: IComponentData): IRequestBody => {
  const statusMap: { [key: string]: string } = {
    Todo: "🧱",
    "In Progress": "🛠",
    Alpha: "🔭",
    Beta: "🧪",
    Live: "✅",
    "Not Applicable": "N/A",
  };

  const body: IRequestBody = {
    name: data.componentName,
    comment: data.componentComments || "No Comments",
    statuses: [
      {
        platform: "Figma",
        status: statusMap[data.figmaStage] || "🧱",
      },
      {
        platform: "Guidelines",
        status: statusMap[data.guidelinesStage] || "🧱",
      },
      {
        platform: "CDN",
        status: statusMap[data.cdnStage] || "🧱",
      },
      {
        platform: "Storybook",
        status: statusMap[data.storybookStage] || "🧱",
      },
    ],
  };

  return body;
};

export const createComponent = (data: IComponentData) => {
  const body = createBody(data);

  const response = axios
    .post(
      `https://msc-component-status-ws.onrender.com/categories/${data.componentCategory}/components`,
      body
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
};