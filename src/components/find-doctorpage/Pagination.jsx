"use client";
import { Table,Pagination } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";

const PaginationPart = ({data}) => {
  const page = data.page
  const pages = []
  const totalPages = data.totalPage

  for(let i = 1 ; i<= totalPages; i++){
    pages.push(i)
  }
  // console.log(pages);
  return (
    <div>
      <Table.Footer>
        <Pagination size="sm">
          <Pagination.Summary>
            {/* {start} to {end} of {users.length} results */}
          </Pagination.Summary>
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={page === 1}
                
              >
                <Link className="flex items-center gap-2" href={`/find-doctors?page=${page - 1}`}>
                <Pagination.PreviousIcon />
                Prev
                </Link>
              </Pagination.Previous>
            </Pagination.Item>
            {pages.map((p) => (
              <Pagination.Item key={p}>

                <Link href={`/find-doctors?page=${p}`}>
                <Pagination.Link isActive={p === page}
                 onPress={() => setPage(p)}>
                  {p}
                </Pagination.Link>
                </Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                isDisabled={page === totalPages}

              >
                <Link className="flex items-center gap-2" href={`/find-doctors?page=${page + 1}`}>
                Next
                <Pagination.NextIcon />
                </Link>
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>
    </div>
  );
};

export default PaginationPart;
