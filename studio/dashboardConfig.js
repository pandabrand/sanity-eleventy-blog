export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '608cbc70b42fb07146535a8b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1r6ss3cv',
                  apiId: '1b47d8d1-61a9-483b-a476-e1ceb0db88f4'
                },
                {
                  buildHookId: '608cbc70b42fb07181535a8b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-m5gqwseh',
                  apiId: 'd5d52237-b441-4cb0-93e5-6472b9bcc51a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pandabrand/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-m5gqwseh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
