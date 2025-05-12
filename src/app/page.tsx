import { Button } from '@/shared/components/button'

export default function Home() {
  return (
    <section className="flex h-screen items-center justify-center bg-neutral-900 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Nepse AI</h1>
        <p className="text-lg">Nepse AI is a Nepali stock market prediction tool.</p>
        <p className="font-i mt-2 text-lg">Built with Next.js and Tailwind CSS.</p>
        <Button variant="destructive">Nepse AI</Button>
      </div>
    </section>
  )
}
