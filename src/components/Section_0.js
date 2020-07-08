import {Path_0} from './SVG/Path_0'

export default function Section() {
    return (
        <>
         <div>
             <div className="container">
                 <div className="content">
                    <div className="contentVisual"> <Path_0/></div>
                    <div className="contentWritten">DO you ever fee like you're out of options? <br></br>  <br></br>

                    <div className="bold"> You feel trapped. <br></br> 
You think have no choice. </div> </div>
                 </div>
             </div>

         
            <style jsx>{` 

                .bold {
                    font-weight: bold;
                    font-style: italic;
                }
                .container {
                    height: 50vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 20vh;
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