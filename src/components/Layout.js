import Head from 'next/head'
import styles from './layout.module.css'
import Header from './Header'



const name = '613'
export const siteTitle = 'We do what other cannot'


export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href=""/>
                <meta
                    name="description"
                    content="we help people put ideas on the internet "
                    />
                <meta
                    property="og:image"
                    content="pattern1.jpg"
                    />
                <meta 
                    name="og:title" 
                    content={siteTitle} />
                <meta 
                    name="twitter:card" content="summary_large_image" />
            </Head>
            <Header/>
            <main>{children}</main>
            <div className={styles.bottom}>
                
            </div>
        </div>
    )
}