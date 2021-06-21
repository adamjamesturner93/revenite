import Link from "next/link";

export const UnauthenticatedLayout: React.FC = ({ children }) => {
  return (
    <div className="flex bg-gray-100">
      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-20 flex items-center">
          <div className="flex flex-grow items-center px-3 justify-between">
            <h1>Revenite</h1>
            <Link href="/sign-in">
              <a className="cursor-pointer text-purple-600">Sign in</a>
            </Link>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};
