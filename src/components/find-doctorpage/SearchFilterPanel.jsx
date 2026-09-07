"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch, FiSliders, FiX } from "react-icons/fi";

const specialties = ["Cardiologist", "Medicine", "Neurology", "Orthopedics", "Pediatrics", "Dermatology", "Oncology"];

export default function SearchFilterPanel() {
  const router = useRouter();
  const current = useSearchParams();
  const [search, setSearch] = useState(current.get("search") || "");
  const [specialization, setSpecialization] = useState(current.get("specialization") || "");
  const [sortBy, setSortBy] = useState(current.get("sortBy") || "");

  const applyFilters = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (specialization) params.set("specialization", specialization);
    if (sortBy) params.set("sortBy", sortBy);
    router.push(`/find-doctors${params.size ? `?${params}` : ""}`);
  };

  const clearFilters = () => {
    setSearch(""); setSpecialization(""); setSortBy(""); router.push("/find-doctors");
  };

  const hasFilters = Boolean(search || specialization || sortBy);

  return (
    <form onSubmit={applyFilters} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" aria-label="Doctor search filters">
      <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900"><FiSliders className="text-[#087f78]" aria-hidden="true" />Refine your search</div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
        <label className="relative"><span className="sr-only">Doctor name or hospital</span><FiSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" /><input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Doctor name or hospital" className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white" /></label>
        <label><span className="sr-only">Specialty</span><select value={specialization} onChange={(e) => setSpecialization(e.target.value)} className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 focus:border-teal-500 focus:bg-white"><option value="">All specialties</option>{specialties.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        <label><span className="sr-only">Sort doctors</span><select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 focus:border-teal-500 focus:bg-white"><option value="">Recommended</option><option value="feeAsc">Fee: low to high</option><option value="feeDesc">Fee: high to low</option><option value="experienceDesc">Most experienced</option><option value="ratingDesc">Highest rated</option></select></label>
        <button type="submit" className="primary-link h-12 px-6">Search</button>
      </div>
      {hasFilters && <button type="button" onClick={clearFilters} className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"><FiX aria-hidden="true" />Clear all filters</button>}
    </form>
  );
}
