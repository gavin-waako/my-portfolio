import { site } from '../../data/site';

export default function Footer() {
  return (
    <footer className="bg-primary py-6 text-white">
      <div className="mx-auto px-4 text-center text-sm text-gray-500">
        © {site.year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
