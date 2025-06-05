export default function NavBar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      background: '#fff',
      padding: '1rem',
      borderBottom: '1px solid #ccc',
      zIndex: 1000,
    }}>
      <button onClick={() => scrollTo('hero')} style={{ marginRight: '1rem' }}>
        Hero
      </button>
      <button onClick={() => scrollTo('about')}>
        About
      </button>
    </nav>
  );
}