import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Clients() {
  return (
    <>
      <div>
        <div className="container">
          <div className="content">
            <div className="contentVisual"> </div>
            <div className="content">
              {' '}
              <div className="logo">
                <Image
                  src="/Logo1.png"
                  alt="logo1"
                  width={112}
                  height={83.35}
                />
              </div>
              <div className="logo">
                <Image
                  lassName="logo"
                  src="/Logo3.png"
                  alt="logo1"
                  width={251}
                  height={58.75}
                />
              </div>
              <div className="logo">
                <Image
                  lassName="logo"
                  src="/Logo8.jpg"
                  alt="logo8"
                  width={146.63}
                  height={146.63}
                />
              </div>
              <div className="logo">
                <Image src="/Logo7.png" alt="logo1" width={259} height={75} />
              </div>
              <div className="logo">
                <Image
                  src="/Logo4.png"
                  alt="logo1"
                  width={146.63}
                  height={72.08}
                />
              </div>
              <div className="logo">
                <Image
                  src="/Logo5.png"
                  alt="logo1"
                  width={251}
                  height={58.75}
                />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .logo {
            margin: 2rem;
            display: grid;
            place-items: center;
          }
          .bold {
            font-weight: bold;
            font-style: italic;
          }

          .container {
            min-height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10rem;
          }

          .content {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            justify-content: space-around;
            align-content: center;
          }

          @media only screen and (max-width: 700px) {
            .container {
              min-height: 50vh;
              display: flex;
              justify-content: center;
              align-items: center;

              padding-bottom: 10rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}
