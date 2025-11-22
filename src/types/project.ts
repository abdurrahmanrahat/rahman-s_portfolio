export type TProject = {
  name: string;
  slug: string;
  image: string;
  category: string;
  description: string;
  viewUrl: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  tags: string[];
};
