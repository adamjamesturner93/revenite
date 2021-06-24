import React from 'react';
import Link from 'next/link';

// export const UnauthenticatedLayout: React.FC = ({ children }) => {
//   return (
//     <div className="flex bg-gray-100">
//       <main className="flex-grow flex flex-col min-h-screen">
//         <header className="bg-gray-800 text-white border-b h-20 flex items-center">
//           <div className="flex flex-grow items-center px-3 justify-between max-w-md mx-auto">
//             <h1>Revenite</h1>
//             <Link href="/sign-in">
//               <a className="cursor-pointer text-purple-600">Sign in</a>
//             </Link>
//           </div>
//         </header>
//         {children}
//       </main>
//     </div>
//   );
// };
export const UnauthenticatedLayout: React.FC = ({ children }) => {
  return (
    <div className="flex bg-gray-100">
      <main className="flex-grow flex flex-col min-h-screen">{children}</main>
    </div>
  );
};
