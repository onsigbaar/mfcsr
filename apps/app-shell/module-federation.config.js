// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'app-shell',
  remotes: ['category', 'purchase', 'featured', 'marketplace'],
  exposes: {},
};

module.exports = moduleFederationConfig;
