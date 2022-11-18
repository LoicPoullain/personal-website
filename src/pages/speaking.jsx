import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, events, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href || '#'}>
        {title}
      </Card.Title>
      {events.map(event => <Card.Eyebrow decorate key={event}>{event}</Card.Eyebrow>)}
      <Card.Description>{description}</Card.Description>
      {cta && <Card.Cta>{cta}</Card.Cta>}
    </Card>
  )
}

export default function Conferences() {
  return (
    <>
      <Head>
        <title>Conferences - Loïc Poullain</title>
        <meta
          name="description"
          content="My conferences"
        />
      </Head>
      <SimpleLayout
        title="My conferences"
        intro="Here are the conferences I gave."
      >
        <div className="space-y-20">
          <SpeakingSection title="2022">
            <Appearance
              href="https://www.youtube.com/watch?v=HNOKdQqrs9U"
              title="A long trip in open source development"
              description="After four years of developing an open source framework, FoalTS, I share with you the challenges I faced."
              events={["Codeurs en Seine, BreizhCamp, Meetup LyonJS"]}
              cta="Watch video (FR)"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=r4S56IPtJOM"
              title="Some misconceptions about authentication"
              description="It is common to oppose sessions and cookies on the one hand and the use of a JWT and a header on the other. We will come back to this idea here."
              events={["BreizhCamp"]}
              cta="Watch video (FR)"
            />
          </SpeakingSection>
          <SpeakingSection title="2019">
            <Appearance
              title="FoalTS, a Web framework to create enterprise-grade Node.js applications"
              description="Foal is a simple, testable and progressive framework for building APIs and/or web applications. It is written in TypeScript and offers many development tools and components to handle recurring scenarios."
              events={["Meetup Node.js Paris"]}
            />
          </SpeakingSection>
          <SpeakingSection title="2017">
            <Appearance
              title="FoalTS, a backend framework that scales"
              description="FoalTS is a new backend framework written in TypeScript. This is still a work in progress, this presentation aims to show its core concepts and get some feedback from you!"
              events={["Meetup Paris TypeScript"]}
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
