import React from 'react';

export type T_APP_ACCORDION = {
  heading?: string;
  headingLeftImage?: string;
  isOpen?: boolean;
  renderHeader?: React.ReactNode;
  renderContent: React.ReactNode;
};
