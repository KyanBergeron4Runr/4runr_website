import Link from 'next/link';

export default function CallToAction() {
  return (
    <div className="cta-container">
      <Link href="/contact" className="cta-button">
        Schedule a Consultation
      </Link>
    </div>
  );
}

// Add this to your CSS file
// .cta-container {
//   margin: 2rem 0;
//   text-align: center;
// }
// 
// .cta-button {
//   display: inline-block;
//   padding: 1rem 2rem;
//   font-size: 1.2rem;
//   font-weight: 600;
//   color: #fff;
//   background: linear-gradient(135deg, #6a5acd 0%, #5648b3 100%);
//   border-radius: 8px;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 12px rgba(106, 90, 205, 0.2);
// }
// 
// .cta-button:hover {
//   transform: translateY(-2px);
//   box-shadow: 0 6px 16px rgba(106, 90, 205, 0.3);
//   background: linear-gradient(135deg, #7b6bde 0%, #6759c4 100%);
// } 