import utilStyles from '../styles/utils.module.css'

export default function Intro() {
    return (
        <>
         <div>
             <div className="container-intro">
                 <div className="content">
                     <div classNmae="contentText">
                     <div className={utilStyles.headingXl}> We help people put ideas on the internet </div>
                     </div>
                 </div>
             </div>

         
            <style jsx>{` 

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