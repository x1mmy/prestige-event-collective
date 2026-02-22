/**
 * Renders JSON-LD structured data for SEO (LocalBusiness, Organization).
 * Each item is output as a separate script tag; content is build-time only.
 */
export function StructuredData({ data }: { data: object[] }) {
  return (
    <>
      {data.map((item, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(item)}
        </script>
      ))}
    </>
  );
}
