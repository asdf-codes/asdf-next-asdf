import {Path} from './SVG/Path'

export default function Section() {
    return (
        <>
         <div>
             <div className="container">
                 <div className="content">
                    <div className="contentVisual"> <Path/></div>
                    <div className="contentWritten">eventually you recogize that: <br></br><br></br>
                    <div className="bold"> You can go anywhere. <br></br>
You can Do anything. </div> </div>
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
                    font-style: uppercase;
                    padding-top: 2rem;
                    font-size: 18px;
                    line-height: 21px;
                    text-align: center;
                    text-transform: uppercase;
                }
                
                .bold {
                    font-weight: bold;
                    font-style: italic;
                }
            `}</style>
         </div>
        </>
    )
}