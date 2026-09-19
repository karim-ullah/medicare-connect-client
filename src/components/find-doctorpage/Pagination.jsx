import Link from "next/link";

const PaginationPart = ({ data, filterQuery = "" }) => {
  const page = Number(data?.page) || 1;
  const totalPages = Number(data?.totalPage) || 1;

  if (totalPages <= 1) return null;

  const buildHref = (target) =>
    `/find-doctors?${filterQuery ? `${filterQuery}&` : ""}page=${target}`;

  const allPages = [];
  for (let i = 1; i <= totalPages; i++) allPages.push(i);

  const pageItems = (() => {
    if (totalPages <= 7) return allPages;
    const window = [1, totalPages, page, page - 1, page + 1];
    const sorted = window
      .filter((n) => n >= 1 && n <= totalPages)
      .filter((n, i, arr) => arr.indexOf(n) === i)
      .sort((a, b) => a - b);

    const items = [];
    let previous = 0;
    sorted.forEach((n) => {
      if (previous && n - previous > 1) items.push("ellipsis-" + n);
      items.push(n);
      previous = n;
    });
    return items;
  })();

  const baseLink =
    "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-slate-200 px-3 text-sm font-medium transition";
  const idleLink = `${baseLink} bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50`;
  const disabledLink = `${baseLink} cursor-not-allowed border-slate-100 bg-slate-100 text-slate-400`;

  return (
    <nav
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {page > 1 ? (
        <Link className={idleLink} href={buildHref(page - 1)} rel="prev">
          Prev
        </Link>
      ) : (
        <span className={disabledLink} aria-disabled="true">
          Prev
        </span>
      )}

      {pageItems.map((item) =>
        typeof item === "string" ? (
          <span key={item} className="px-1 text-sm text-slate-400" aria-hidden="true">
            …
          </span>
        ) : (
          <Link
            key={item}
            href={buildHref(item)}
            aria-current={item === page ? "page" : undefined}
            className={
              item === page
                ? `${baseLink} border-[#087f78] bg-[#087f78] text-white`
                : idleLink
            }
          >
            {item}
          </Link>
        ),
      )}

      {page < totalPages ? (
        <Link className={idleLink} href={buildHref(page + 1)} rel="next">
          Next
        </Link>
      ) : (
        <span className={disabledLink} aria-disabled="true">
          Next
        </span>
      )}
    </nav>
  );
};

export default PaginationPart;
