import {Path_1} from './SVG/Path_1'

export default function Section() {
    return (
        <>
         <div>
             <div className="container">
                 <div className="content">
                    <div className="contentVisual"> <Path_1/></div>
                    <div className="contentWritten"> The possibilities are endless. 
</div>
                 </div>
             </div>

         
            <style jsx>{` 
                .container {
                    height: 50vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 25rem 0;
                }

                .contentWritten {
                    font-style: uppercase;
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