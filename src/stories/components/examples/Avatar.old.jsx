import { Avatar } from 'components/avatar';
import AvatarDocs from './AvatarDocs.mdx';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      page: AvatarDocs,
    },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
