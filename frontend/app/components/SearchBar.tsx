"use client";

import { useState } from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = search.trim();
    if (!query) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      role="search"
      className="flex w-full max-w-xl items-center gap-3 h-10 rounded-full border border-white/20 bg-white px-3 py-2 shadow-lg transition focus-within:border-[#e8001a]"
    >
      {/* Search Icon */}
      <FaSearch
        aria-hidden="true"
        className="ml-2 shrink-0 text-lg text-gray-500"
      />

      {/* Search Input */}
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search WTJ..."
        aria-label="Search WTJ"
        className="min-w-0 flex-1 bg-transparent py-2 text-sm text-black outline-none placeholder:text-gray-400"
      />

      {/* Submit Button */}
      <button
        type="submit"
        aria-label="Submit search"
        disabled={!search.trim()}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8001a] text-white transition hover:bg-[#c90017] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FaArrowRight aria-hidden="true" />
      </button>
    </form>
  );
}
