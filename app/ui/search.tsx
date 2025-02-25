'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname() // current path, in practice it will be /dashboard/invoices
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback(term => {
    const params = new URLSearchParams(searchParams) // Url parameters
    params.set('page', '1')
    
    console.log(`Searching... ${term}`)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`) // Updates the URL with the user's search data, e.g. /dashboard/invoices?query=lee if the user searches for "Lee"
  }, 300) // given function will run 0.3 seconds after user input stops, do to prevent eventhandler from running from each individual key input

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
