
				import createSSRHandler from './home/teutondev/Documents/0.0_projects/moto_maint_term_cond/.netlify/build/entry.mjs';
				export default createSSRHandler({"cacheOnDemandPages":false});
				export const config = {
					includedFiles: ['**/*'],
					name: 'Astro SSR',
					nodeBundler: 'none',
					generator: '@astrojs/netlify@5.5.1',
					path: '/*',
					preferStatic: true,
				};
			