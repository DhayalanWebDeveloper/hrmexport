export default function Map() {
  return (
    <section className="">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://maps.google.com/maps?q=No%2053,%20Pillaiyar%20kovil%20street,%20Kottiyampundi,%20Viluppuram,%20Tamil%20Nadu%20-%20605203&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HRM Exports Location"
        ></iframe>
      </div>
    </section>
  );
}
