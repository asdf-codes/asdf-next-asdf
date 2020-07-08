import utilStyles from '../styles/utils.module.css'

export default function Intro() {
    return (
        <>
         <div>
             <div className="container-intro">
                 <div className="content">
                     <div classNmae="contentText">
                     <div className={utilStyles.headingXl}> We help people put <p className="inline">ideas on the internet </p> </div>
                     </div>
                 </div>
             </div>

         
            <style jsx>{` 

                .inline {
                    display: inline-block;
                    font-style: italic;
                    text-decoration-line: underline;
                }

                .contentText {
                    text-align: center;
                }
                
                .container-intro {
                    height: 90vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                }
                
            `}</style>
         </div>
        </>
    )
}