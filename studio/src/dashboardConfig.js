export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6111436d3cd425318e5a5c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-z95yc1w7',
                  apiId: '01ebe800-34a3-47d4-9d09-780d20d4ad74'
                },
                {
                  buildHookId: '5f6111436ea1b5263618614c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6sxbahem',
                  apiId: '5d9794fb-baae-45d4-bd9d-6cccbd322a94'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomisstanding/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6sxbahem.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
