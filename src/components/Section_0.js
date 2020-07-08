import {Path_0} from './SVG/Path_0'

export default function Section() {
    return (
        <>
         <div>
             <div className="container">
                 <div className="content">
                    <div className="contentVisual"> <Path_0/></div>
                    <div className="contentWritten"> We often think there are only two ways of doing something and 

we feel trapped. 
we think have no choice.  </div>
                 </div>
             </div>

         
            <style jsx>{` 
                .container {
                    height: 50vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .contentWritten {
                    padding-top: 2rem;
                    font-size: 18px;
                    line-height: 21px;
                    text-align: center;
                    text-transform: uppercase;
                }
                
            `}</style>
         </div>
        </>
    )
}