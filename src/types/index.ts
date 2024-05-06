export type TProject = {
  _id: string;
  projectName: string;
  projectImage: string;
  shortDesc: string;
  features: {
    one: string;
    two: string;
    three: string;
  };
  technology: string;
  liveLink: string;
  githubClient: string;
  githubServer: string;
};
