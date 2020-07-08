import utilStyles from '../styles/utils.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Collaborate() {
    return(
        <>
        <Layout>
            <div className="contactInfo">

                <h1>contact</h1>
                <p className={utilStyles.pDefault}>oo@noadjective.com</p>
            </div>
        </Layout>    

        <style jsx>{`
            .contactInfo {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

        
        `}</style>
        </>
    )
}