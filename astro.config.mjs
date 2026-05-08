import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const [owner, repo] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isProjectPage = Boolean(isGithubActions && owner && repo && repo !== `${owner}.github.io`);

const explicitSite = process.env.SITE_URL?.trim();
const explicitBase = process.env.BASE_PATH?.trim();
const inferredSite = isGithubActions && owner && repo
  ? isProjectPage
    ? `https://${owner}.github.io/${repo}`
    : `https://${owner}.github.io`
  : undefined;
const inferredBase = isProjectPage && repo ? `/${repo}` : '/';
const site = explicitSite && explicitSite.length > 0 ? explicitSite : inferredSite;

export default defineConfig({
  ...(site ? { site } : {}),
  output: 'static',
  base: explicitBase && explicitBase.length > 0 ? explicitBase : inferredBase,
  integrations: [tailwind({ applyBaseStyles: false })]
});
