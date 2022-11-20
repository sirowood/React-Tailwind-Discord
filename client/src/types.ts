import { ReactElement } from 'react';

export interface ExploreRowProps {
  rowName: string;
  children: ReactElement;
  isNew?: boolean;
};

export interface NavLinkProps {
  href: string;
  children: ReactElement;
};

interface SingleMessageProps {
  avatarUrl: string;
  user: string;
  date: string;
  text: string;
};

export interface SingleChannelProps {
  id: number;
  label: string;
  description?: string;
  icon?: string;
  unread?: boolean;
  messages: SingleMessageProps[];
};

export interface SingleCategoryProps {
  id: number;
  label: string;
  icon?: string;
  channels: SingleChannelProps[];
};

export interface ServerProps {
  id: number;
  label: string;
  img: string;
  categories: SingleCategoryProps[];
};

export interface ChannelLinkProps {
  channel: SingleChannelProps;
};

export interface MessageComponentProps {
  channel: SingleChannelProps;
};

export interface MessageProps {
  message: SingleMessageProps;
};