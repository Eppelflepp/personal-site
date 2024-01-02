import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'cbi7x7wj',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-12-29',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas },
});

export default config;