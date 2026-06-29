"use client";
import { Button, ListBox, SearchField, Select } from "@heroui/react";
import { useRouter,  } from "next/navigation";
import React, { useState } from "react";

const SearchFilterPanel = () => {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [sortBy, setSortBy] = useState("")

  const router = useRouter()


  const handleFilter = ()=>{
    const params = new URLSearchParams()
    if(search){
        params.set('search', search)
    }
    if(specialization){
        params.set('specialization', specialization)
    }

    if(sortBy){
        params.set('sortBy', sortBy)
    }

    router.push(`/find-doctors?${params.toString()}`)
  }

//   console.log(search, specialization);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <SearchField className={"flex-1"} name="search" aria-label="search" >
        <SearchField.Group className={"bg-accent/10"}>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-[280px]" placeholder="Search..." value={search} onChange={e=> setSearch(e.target.value)}/>
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Select className="max-w-[256px]" placeholder="Search by" aria-label="specialization" value={specialization} onChange={(value)=>setSpecialization(value)}>
        <Select.Trigger className={'bg-accent/10'}>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="" textValue="">
              Search by spe..
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="Cardiologist" textValue="Cardiologist">
              Cardiologist
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="Medicine" textValue="Medicine">
              Medicine
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="Hearts" textValue="Hearts">
              Hearts
              <ListBox.ItemIndicator />
            </ListBox.Item>
            
          </ListBox>
        </Select.Popover>
      </Select>


      <Select className="max-w-[256px]" placeholder="Sort by" aria-label="sortBy" value={sortBy} onChange={(value)=>setSortBy(value)}>
        <Select.Trigger className={'bg-accent/10'}>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="" textValue="">
              Sort by
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="feeAsc" textValue="feeAsc">
              Consultation Fee: Low → High
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="feeDesc" textValue="feeDesc">
              Consultation Fee: High → Low
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="experienceAsc" textValue="experienceAsc">
              Experience: Low → High
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="experienceDesc" textValue="experienceDesc">
              Experience: High → Low
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="ratingAsc" textValue="ratingAsc">
              Rating: Low → High
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="ratingDesc" textValue="ratingDesc">
              Experience: High → Low
              <ListBox.ItemIndicator />
            </ListBox.Item>
            
          </ListBox>
        </Select.Popover>
      </Select>

      <Button onClick={handleFilter}>Apply filter</Button>
    </div>
  );
};

export default SearchFilterPanel;
