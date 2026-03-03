import { useMemo, useState } from "react";

function useScanFilters(scans) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const statusOptions = useMemo(
    () => ["All", ...new Set(scans.map((scan) => scan.status))],
    [scans]
  );
 const typeOptions = useMemo(
    () => ["All", ...new Set(scans.map((scan) => scan.type))],
    [scans]);
const filteredScans = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
return scans.filter((scan) => {
      const matchesSearch = !normalizedQuery || scan.name.toLowerCase().includes(normalizedQuery) ||
        scan.type.toLowerCase().includes(normalizedQuery);
         const matchesStatus =statusFilter === "All" || scan.status === statusFilter;
  const matchesType = typeFilter === "All" || scan.type === typeFilter;
  return matchesSearch && matchesStatus && matchesType;});
  }, [scans, searchQuery, statusFilter, typeFilter]);
  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("All");
    setTypeFilter("All");};

  return {
    searchQuery,setSearchQuery,
showFilters,setShowFilters,
    statusFilter, setStatusFilter,
    typeFilter,setTypeFilter,
    statusOptions, typeOptions, filteredScans, clearFilters,
 };}
export default useScanFilters;
