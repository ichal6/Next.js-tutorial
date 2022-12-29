import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}) {
  return (
      <Layout home>
        <Head>
          <title>Test branch!!!</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>I am a 4th-year student of the Faculty of Computer Science and Telecommunications at Cracow University of Technology.
              I have been fascinated by computer science since an early age. For over two years I have been learning web technologies.
              I have been creating in Java / Spring Boot and Angular.
              I have been learning to code for the last four years, both independently, at the university and with a group at the programming school. +
              Now I want to use my skills outside the university world.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                      <Link href={`/posts/${id}`}>{title}</Link>
                      <br />
                      <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                      </small>
                  </li>
              ))}
          </ul>
        </section>
      </Layout>
  );
}