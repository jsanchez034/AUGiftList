import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-100">
      <div className="z-10 w-full max-w-md items-center justify-center font-mono text-sm lg:flex bg-white p-8 rounded-lg shadow-lg">
        <Form />
      </div>
    </main>
  )
}
