"use client";
import { Button, ListBox, SearchField, Select } from "@heroui/react";
import { useRouter,  } from "next/navigation";
import React, { useState } from "react";

const SearchFilterPanel = () => {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [doctors, setDoctors] = useState([]);

  const router = useRouter()


  const handleFilter = ()=>{
    const params = new URLSearchParams()
    if(search){
        params.set('search', search)
    }
    if(specialization){
        params.set('specialization', specialization)
    }

    router.push(`/find-doctors?${params.toString()}`)
  }

//   console.log(search, specialization);
  return (
    <div className="flex items-center gap-3 justify-between">
      <SearchField className={"flex-1"} name="search" aria-label="search" >
        <SearchField.Group className={"bg-accent/10"}>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-[280px]" placeholder="Search..." value={search} onChange={e=> setSearch(e.target.value)}/>
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Select className="w-[256px]" placeholder="Select one" aria-label="specialization" value={specialization} onChange={(value)=>setSpecialization(value)}>
        <Select.Trigger className={'bg-accent/10'}>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
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
            <ListBox.Item id="texas" textValue="Texas">
              Texas
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="new-york" textValue="New York">
              New York
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="washington" textValue="Washington">
              Washington
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
