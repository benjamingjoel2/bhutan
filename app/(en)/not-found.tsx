import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <p className="eyebrow mb-4">Not found</p>
      <h1 className="display-lg">This path leads nowhere, which in Bhutan is rare.</h1>
      <Link href="/" className="btn btn-outline mt-8">Return home</Link>
    </main>
  );
}
