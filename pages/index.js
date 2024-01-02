import Todolist from './components/Todolist'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["200", "400", "600", "800"],
});
export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col bg-gradient-to-b from-blue-300 to-blue-800 ${poppins.className}`}>
      <Todolist />
    </main>
  )
}
