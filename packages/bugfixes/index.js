import { bugs } from '../bugs/index.js';

const fixes = bugs.map(({ id, title }) => {
    return {
        id,
        fix: `Fix for ${title}`,
    };
});

console.log(fixes);