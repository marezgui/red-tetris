import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
// import addStoriesGroup from 'react-storybook-addon-add-stories-group';

const req = require.context("../components", true, /\.?stories\.js$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);

setAddon(JSXAddon);
// setAddon(addStoriesGroup);