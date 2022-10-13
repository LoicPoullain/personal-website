import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  const externalArticles = [
    {
      // slug:
      author: 'Loïc Poullain',
      date: '2021-04-09',
      title: 'Node.JS — How to create simple to-do list with Foal',
      description: 'In this tutorial you will learn how to create a basic web application with FoalTS. The demo application is a simple to-do list with which users can view, create and delete their tasks.',
      // component:
      externalURL: 'https://foalts.org/docs/tutorials/simple-todo-list/1-installation'
    },
    {
      // slug:
      author: 'Loïc Poullain',
      date: '2021-05-31',
      title: 'How to build a real-world application with React and Node (Foal)',
      description: 'This tutorial shows how to build a real-world application with React and Foal. It assumes that you have already read the guide How to build a Simple To-Do List and that you have a basic knowledge of React and Node.',
      // component:
      externalURL: 'https://foalts.org/docs/tutorials/real-world-example-with-react/1-introduction'
    },
    {
      // slug:
      author: 'Loïc Poullain',
      date: '2022-06-10',
      title: 'How to use VSCode debugger with multiple Docker services',
      description: 'In my company, we use Docker and Docker Compose to run our Node.js services locally. Recently, I needed to configure and run the VSCode debugger on some of these services to debug a feature. There are a few things to know to achieve this, which I will share in this article with some basic examples.',
      // component:
      externalURL: 'https://tech.indy.fr/2022/06/10/how-to-use-vscode-debugger-with-multiple-docker-services/'
    },
    {
      // slug:
      author: 'Loïc Poullain',
      date: '2022-10-13',
      title: 'How to securely store passwords in a database?',
      description: 'Passwords must never be stored in clear text in the database. If they were, attackers would be able to steal them if the database ever gets compromised. To avoid this, two actions are necessary to store a password securely: hashing and salting.',
      // component:
      externalURL: 'https://tech.indy.fr/2022/10/13/how-to-securely-store-passwords-in-a-database/'
    },
  ]

  return articles.concat(externalArticles).sort((a, z) => new Date(z.date) - new Date(a.date))
}
