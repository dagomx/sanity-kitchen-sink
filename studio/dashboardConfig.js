export default {
  widgets: [
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
                  buildHookId: '5eb75179c2f2d2ccaa2872dc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y8p8yhyz',
                  apiId: '2ec484a7-1ea1-4642-a405-2a6f0e18635f'
                },
                {
                  buildHookId: '5eb751791842f5f9be0a5ba9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1emxj23r',
                  apiId: '2158db33-2d4b-4a06-bf58-5f217cd86c0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dagomx/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1emxj23r.netlify.app', category: 'apps'}
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
