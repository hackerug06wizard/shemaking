import Link from "next/link"
import Image from "next/image"
import { Home, Mic, Calendar, User } from "lucide-react"

export function NavBar() {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="relative w-12 h-12 rounded-full overflow-hidden animate-glow">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Artist Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </Link>
          <div className="flex space-x-4">
            <NavLink href="/" icon={<Home className="h-5 w-5" />} text="Home" />
            <NavLink href="/music" icon={<Mic className="h-5 w-5" />} text="Music" />
            <NavLink href="/events" icon={<Calendar className="h-5 w-5" />} text="Events" />
            <NavLink href="/about" icon={<User className="h-5 w-5" />} text="About" />
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
    >
      {icon}
      <span className="hidden md:inline">{text}</span>
    </Link>
  )
}

