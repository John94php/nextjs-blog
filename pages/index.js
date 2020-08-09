import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}


export default function Home({allPostsData}) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p><h1>Kilka słów o autorze</h1>
        <div className={utilStyles.info}>
            <ul>
                <li>Wykształcenie: wyższe inżynierskie na kierunku Informatyka - Zarządzanie projektami IT</li>
                <li>Hobby: Programowanie [HTML,CSS,Mysql,PHP,PDO,Laravel,Next.js], Muzyka [Tworzenie aranżacji muzycznych, gra na bębnie], Excel [prowadzenie statystyk]</li>
            </ul>

        </div>
    <p>Poniżej znajduje się lista moich wpisów</p>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>


          </p>
          <p>

          </p>
        </section>


      </Layout>
  )
}
