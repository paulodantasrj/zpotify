type SearchProps = {
  search: string
  setSearch: (search: string) => void
}

export const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <div className="flex max-w-6xl items-center overflow-hidden rounded-full border-2 border-gray-700  bg-gray-900 p-1.5 px-5 pr-8">
      <div className="h-4 w-4 flex-shrink-0 animate-pulse rounded-full border-2" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-none bg-gray-900 text-xs text-white placeholder-gray-100 outline-none focus:ring-0 lg:w-full"
        placeholder="Search..."
      />
    </div>
  )
}
