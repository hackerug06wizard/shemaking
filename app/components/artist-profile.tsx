import { AnimatedHeading } from "./app/components/animated-heading"

export function ArtistProfile() {
  return (
    <Card className="mb-8 bg-gray-800/50 backdrop-blur-sm border-gray-700">
      <CardHeader>
        <AnimatedHeading>Artist Profile</AnimatedHeading>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden animate-glow">
          <img src="/placeholder.svg?height=96&width=96" alt="Artist Avatar" className="object-cover w-full h-full" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Artist Name</h2>
          <p className="text-gray-300">Genre: Pop/Rock</p>
          <p className="mt-2">
            A brief bio of the artist goes here. Describe their style, influences, and achievements.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

