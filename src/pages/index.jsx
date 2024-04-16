import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  DevToIcon,
} from '@/components/SocialIcons'
import logoAssembleeNationale from '@/images/logos/assemblee_nationale.jpg'
import logoCentraleSupelec from '@/images/logos/centralesupelec.jpg'
import logoDassaultSystemes from '@/images/logos/dassault_systemes.jpg'
import logoDatadog from '@/images/logos/datadog.jpg'
import logoIndy from '@/images/logos/indy.jpg'
import logoFoal from '@/images/logos/foal.png'
import logoLinito from '@/images/logos/linito.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={article.externalURL || `/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta externalLink={!!article.externalURL}>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume({ title, items, showLinkedInBtn }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{title}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {items.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                <a href={role.link}>{role.company}</a>
              </dd>
              {role.jobs.map((job) => (
                <React.Fragment key={job.title}>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {job.title}
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label={`${job.start.label ?? job.start} until ${
                      job.end.label ?? job.end
                    }`}
                  >
                    <time dateTime={job.start.dateTime ?? job.start}>
                      {job.start.label ?? job.start}
                    </time>{' '}
                    {job.end !== job.start && (
                      <React.Fragment>
                        <span aria-hidden="true">—</span>{' '}
                        <time dateTime={job.end.dateTime ?? job.end}>
                          {job.end.label ?? job.end}
                        </time>
                      </React.Fragment>
                    )}
                  </dd>
                </React.Fragment>
              ))}
            </dl>
          </li>
        ))}
      </ol>
      {showLinkedInBtn && (
        <Button
          href="https://www.linkedin.com/in/loicpoullain/"
          variant="secondary"
          className="group mt-6 w-full"
        >
          View resume on LinkedIn
          <LinkedInIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Button>
      )}
    </div>
  )
}

export default function Home({ articles }) {
  let workItems = [
    {
      company: 'Linito',
      logo: logoLinito,
      link: 'https://www.linito.io/',
      jobs: [
        {
          title: 'Founder',
          start: '2024',
          end: 'Present',
        },
      ],
    },
    {
      company: 'Indy',
      logo: logoIndy,
      link: 'https://www.indy.fr/',
      jobs: [
        {
          title: 'Full-Stack Software Engineer',
          start: '2021',
          end: '2023',
        },
      ],
    },
    {
      company: 'FoalTS',
      logo: logoFoal,
      link: 'https://foalts.org/',
      jobs: [
        {
          title: 'Open Source Backend Engineer',
          start: '2018',
          end: {
            label: 'Present',
            dateTime: new Date().getFullYear(),
          },
        },
      ],
    },
    {
      company: 'CentraleSupélec, Paris-Saclay University',
      logo: logoCentraleSupelec,
      link: 'https://www.centralesupelec.fr/',
      jobs: [
        {
          title: 'Professor in Software Engineering',
          start: '2018',
          end: '2021',
        },
      ],
    },
    {
      company: 'French Parliament',
      logo: logoAssembleeNationale,
      link: 'https://www.assemblee-nationale.fr/',
      jobs: [
        {
          title: 'Frontend Software Engineer',
          start: '2020',
          end: '2020',
        },
      ],
    },
    {
      company: 'Dassault Systèmes',
      logo: logoDassaultSystemes,
      link: 'https://www.3ds.com/',
      jobs: [
        {
          title: 'Frontend Engineer Intern',
          start: '2017',
          end: '2017',
        },
      ],
    },
    {
      company: 'Datadog',
      logo: logoDatadog,
      link: 'https://www.datadoghq.com/',
      jobs: [
        {
          title: 'Software Engineer Intern',
          start: '2016',
          end: '2017',
        },
      ],
    },
  ]

  let educationItems = [
    {
      company: 'CentraleSupélec, Paris-Saclay University',
      logo: logoCentraleSupelec,
      link: 'https://www.centralesupelec.fr/',
      jobs: [
        {
          title: 'BsC & MsC, Computer Science',
          start: '2014',
          end: '2018',
        },
      ],
    },
  ]

  const jobTitle = 'Full-Stack Software Engineer'

  return (
    <>
      <Head>
        <title>Loïc Poullain - {jobTitle}</title>
        <meta
          name="description"
          content="I’m Loïc, a software engineer based in Lyon in France. I’m the creator of FoalTS, a full-featured Node.js framework for building web applications."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {jobTitle}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Loïc, a software engineer based in Lyon in France. I’m the
            creator of <a href="https://foalts.org/">FoalTS</a>, a full-featured
            Node.js framework for building web applications.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/Loic_Poullain"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://dev.to/loicpoullain"
              aria-label="Follow on Dev.to"
              icon={DevToIcon}
            />
            <SocialLink
              href="https://github.com/LoicPoullain"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/loicpoullain/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article
                key={article.externalURL || article.slug}
                article={article}
              />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume showLinkedInBtn items={workItems} title="Work" />
            <Resume items={educationItems} title="Education" />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
