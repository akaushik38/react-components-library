import React from 'react';

import SearchBar from './Search-bar';

export default {
    title: 'Example/SearchBar',
    component: SearchBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    backgroundColor: '#e6e6e6',
};