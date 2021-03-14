import { Logo } from './SVG/Logo';

export default function Header() {
  return (
    <>
      <div className="header">
        <Logo className="logo1" />
      </div>
      <style jsx>{`
        .header {
          width: 100%;
          position: fixed;
          top: 0;
          margin: 2rem 0rem;
          z-index: 1000;
        }
      `}</style>
    </>
  );
}
