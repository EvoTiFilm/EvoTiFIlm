export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e11da832f01282b35b0e953',
                  title: 'Sanity Studio',
                  name: 'EvoTiFIlm-studio',
                  apiId: 'ef920616-5f17-4f97-9443-2aa7333c3c89'
                },
                {
                  buildHookId: '5e11da834040ecfffd16760d',
                  title: 'Portfolio Website',
                  name: 'EvoTiFIlm',
                  apiId: '13df2f3c-bdb8-4df5-9a95-27ff730e8a47'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EvoTiFilm/EvoTiFIlm',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://EvoTiFIlm.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
