'use client'

import GroceryItemCard from '@/components/GroceryItemCard'
import { IGrocery } from '@/models/grocery.model'
import { SlidersHorizontal, X } from 'lucide-react'
import { useMemo, useState } from 'react'

const CATEGORY_OPTIONS = [
  'Fruits & Vegetables',
  'Dairy & Eggs',
  'Rice, Atta & Grains',
  'Snacks & Biscuits',
  'Spices & Masalas',
  'Beverages & Drinks',
  'Personal Care',
  'Household Essentials',
  'Instant & Packaged Food',
  'Baby & Pet Care',
]

const UNIT_OPTIONS = ['kg', 'g', 'liter', 'ml', 'piece', 'pack']

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc'

function Categories({ groceryList }: { groceryList: IGrocery[] }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedUnits, setSelectedUnits] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<SortOption>('default')
  const [search, setSearch] = useState('')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const toggleUnit = (unit: string) => {
    setSelectedUnits((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedUnits([])
    setSortBy('default')
    setSearch('')
  }

  const filteredProducts = useMemo(() => {
    let list = [...groceryList]

    if (selectedCategories.length > 0) {
      list = list.filter((item) => selectedCategories.includes(item.category))
    }

    if (selectedUnits.length > 0) {
      list = list.filter((item) => selectedUnits.includes(item.unit))
    }

    const query = search.trim().toLowerCase()
    if (query) {
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      )
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name))
    }

    return list
  }, [groceryList, selectedCategories, selectedUnits, search, sortBy])

  const filterSidebar = (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#006e2e]">Filters</h2>
        {(selectedCategories.length > 0 ||
          selectedUnits.length > 0 ||
          sortBy !== 'default' ||
          search) && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-medium text-[#3d4a3d] hover:text-[#006e2e] transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#141b2b] mb-2">
          Search products
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Name or category..."
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#006e2e]/30"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#141b2b] mb-2">Sort by</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#006e2e]/30"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
        </select>
      </div>

      <div>
        <p className="text-sm font-semibold text-[#141b2b] mb-3">Category</p>
        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
          {CATEGORY_OPTIONS.map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer text-sm text-[#3d4a3d] hover:text-[#006e2e]"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="rounded border-gray-300 text-[#006e2e] focus:ring-[#006e2e]"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-[#141b2b] mb-3">Unit</p>
        <div className="flex flex-wrap gap-2">
          {UNIT_OPTIONS.map((unit) => (
            <button
              key={unit}
              type="button"
              onClick={() => toggleUnit(unit)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium border transition-all ${
                selectedUnits.includes(unit)
                  ? 'bg-[#006e2e] text-white border-[#006e2e]'
                  : 'bg-white text-[#3d4a3d] border-black/10 hover:border-[#006e2e]/40'
              }`}
            >
              {unit}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )

  return (
    <div className="w-[95%] md:w-[90%] max-w-[1280px] mx-auto pt-28 pb-16">
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-[#006e2e] mb-2">
          All Products
        </h1>
        <p className="text-[#3d4a3d]">
          Browse our full grocery catalog and filter by category, unit, or price.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setMobileFiltersOpen(true)}
        className="lg:hidden mb-6 flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#006e2e] shadow-sm"
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filters
      </button>

      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/40" onClick={() => setMobileFiltersOpen(false)}>
          <div
            className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#006e2e]">Filters</h2>
              <button type="button" onClick={() => setMobileFiltersOpen(false)}>
                <X className="h-5 w-5 text-[#3d4a3d]" />
              </button>
            </div>
            {filterSidebar}
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            {filterSidebar}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm text-[#3d4a3d] mb-4">
            Showing {filteredProducts.length} of {groceryList.length} products
          </p>

          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-black/10 bg-white py-16 text-center">
              <p className="text-[#3d4a3d] mb-4">No products match your filters.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-full bg-[#006e2e] px-6 py-2 text-sm font-medium text-white hover:bg-[#005a25] transition-colors"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((item) => (
                <GroceryItemCard key={item._id?.toString()} item={item as IGrocery & { _id: string }} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Categories
