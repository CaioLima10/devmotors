export interface PostProps {
  objects: ObjectPost[];
}

interface ObjectPost {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    button: string;
    description: {
      title: string;
      text: string;
      banner: {
        url: string;
      };
      button_active: boolean;
      button_title: string;
      button_url: string;
    };
  };
}
