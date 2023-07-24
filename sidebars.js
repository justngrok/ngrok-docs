/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'overview',
    'getting-started',
    {
      label: 'Guides',
      type: 'category',
      link: { type: 'doc', id: 'guides/index' },
      items: [ 
        { type: 'autogenerated', dirName: 'guides',}, 
        {
          label: 'Using ngrok with',
          type: 'category',
          link: { type: 'doc', id: 'using-ngrok-with' },
          items: [ { type: 'autogenerated', dirName: 'using-ngrok-with', }, ],
        },
      ],
    },
    {
      label: 'Cloud Edge',
      type: 'category',
      link: { type: 'doc', id: 'cloud-edge/index' },
      items: [ { type: 'autogenerated', dirName: 'cloud-edge', }, ],
    },
    {
      label: 'Secure Tunnels',
      type: 'category',
      link: { type: 'doc', id: 'secure-tunnels/index' },
      items: [ { type: 'autogenerated', dirName: 'secure-tunnels', }, ],
    },
    {
      label: 'Events',
      type: 'category',
      link: { type: 'doc', id: 'events/index' },
      items: [ 
	'events/index',
	'events/reference',
      ],
    },
    {
      label: 'API',
      type: 'category',
      link: { type: 'doc', id: 'api/index' },
      items: [
        'api/index',
	{
	  type: 'category',
	  label: 'API Reference',
	  items: [ 
            'api/reference',
	    // Abuse
	    'api/resources/abuse-reports',
	    // Agent
	    {
	      type: 'category', label: 'Agent',
	      items: [ 
		'api/resources/agent-ingresses',
		'api/resources/tunnels',
		'api/resources/tunnel-sessions',
	      ],
	    },
	    // Application Users
	    {
	      type: 'category', label: 'Application Users',
	      items: [ 
		'api/resources/application-users',
		'api/resources/application-sessions',
	      ],
	    },
	    // Backends
	    {
	      type: 'category', label: 'Backends',
	      items: [ 
		'api/resources/failover-backends',
		'api/resources/http-response-backends',
		'api/resources/tunnel-group-backends',
		'api/resources/weighted-backends',
	      ],
	    },
	    // Certificates
	    {
	      type: 'category', label: 'Certificates',
	      items: [ 
		'api/resources/certificate-authorities',
		'api/resources/ssh-certificate-authorities',
		'api/resources/ssh-host-certificates',
		'api/resources/ssh-user-certificates',
		'api/resources/tls-certificates',
	      ],
	    },
	    // Credentials
	    {
	      type: 'category', label: 'Credentials',
	      items: [ 
		'api/resources/api-keys',
		'api/resources/ssh-credentials',
		'api/resources/credentials',
	      ],
	    },
	    // Endpoints
	    {
	      type: 'category', label: 'Endpoints',
	      items: [ 
		'api/resources/reserved-addrs',
		'api/resources/reserved-domains',
		'api/resources/endpoints',
	      ],
	    },
	    // Events
	    {
	      type: 'category', label: 'Events',
	      items: [ 
		'api/resources/event-destinations',
		'api/resources/event-sources',
		'api/resources/event-subscriptions',
	      ],
	    },
	    // HTTPS Edges
	    {
	      type: 'category', label: 'HTTPS Edges',
	      items: [ 
		'api/resources/edges-https',
		'api/resources/edges-https-routes',
		'api/resources/https-edge-mutual-tls-module',
		'api/resources/https-edge-route-backend-module',
		'api/resources/https-edge-route-circuit-breaker-module',
		'api/resources/https-edge-route-compression-module',
		'api/resources/https-edge-route-ip-restriction-module',
		'api/resources/https-edge-route-oauth-module',
		'api/resources/https-edge-route-oidc-module',
		'api/resources/https-edge-route-request-headers-module',
		'api/resources/https-edge-route-response-headers-module',
		'api/resources/https-edge-route-saml-module',
		'api/resources/https-edge-route-webhook-validation-module',
		'api/resources/https-edge-route-websocket-tcp-converter-module',
		'api/resources/https-edge-tls-termination-module',
	      ],
	    },
	    // IP Restrictions
	    {
	      type: 'category', label: 'IP Restrictions',
	      items: [ 
		'api/resources/ip-policies',
		'api/resources/ip-policy-rules',
		'api/resources/ip-restrictions',
	      ],
	    },
	    // TCP Edges
	    {
	      type: 'category', label: 'TCP Edges',
	      items: [ 
		'api/resources/edges-tcp',
		'api/resources/tcp-edge-backend-module',
		'api/resources/tcp-edge-ip-restriction-module',
	      ],
	    },
	    // TLS Edges
	    {
	      type: 'category', label: 'TLS Edges',
	      items: [ 
		'api/resources/edges-tls',
		'api/resources/tls-edge-backend-module',
		'api/resources/tls-edge-ip-restriction-module',
		'api/resources/tls-edge-mutual-tls-module',
		'api/resources/tls-edge-tls-termination-module',
	      ],
	    },
	  ],
	},
      ],
    },
    'user-management/index',
    {
      label: 'Errors',
      type: 'category',
      link: { type: 'doc', id: 'errors/index' },
      items: [
	'errors/index',
	'errors/reference',
      ],
    },
    {
      label: 'Integrations',
      type: 'category',
      link: { type: 'doc', id: 'integrations/index' },
      items: [
        { type: 'autogenerated', dirName: 'integrations' }
      ],
    },
    'faq/faq',
  ],

};

module.exports = sidebars;
